import os
# Set the environment variable
os.environ["PYTORCH_ENABLE_MPS_FALLBACK"] = "1"
import numpy as np
import cv2
import torch
from depth_anything_v2.dpt import DepthAnythingV2
from huggingface_hub import hf_hub_download


# Load the depth model
model_configs = {
    'vits': {'encoder': 'vits', 'features': 64, 'out_channels': [48, 96, 192, 384]}
}
depth_model = DepthAnythingV2(**model_configs['vits'])
filepath = "src/react/_estimation/depth_anything_v2/checkpoints/Depth Anything V2.pth"

depth_model.load_state_dict(torch.load(filepath, map_location="cpu"))
depth_model.eval()

# Load the image
image_path = "src/react/_estimation/chicken.jpg"  # Update path to be relative
raw_img = cv2.imread(image_path)

# Convert the image to the HSV color space
hsv_image = cv2.cvtColor(raw_img, cv2.COLOR_BGR2HSV)

# Define HSV range for raw pink chicken meat with broader range
pink_lower = np.array([0, 10, 100])  # H: 0 (red), S: ~4%, V: ~59%
pink_upper = np.array([20, 255, 255])  # H: 20 (pink-red), S: ~59%, V: 100%

# Create binary mask for pink color
pink_mask = cv2.inRange(hsv_image, pink_lower, pink_upper)

# Perform morphological operations to refine the mask
kernel = np.ones((5, 5), np.uint8)
refined_mask = cv2.morphologyEx(pink_mask, cv2.MORPH_CLOSE, kernel)  # Close small holes
refined_mask = cv2.morphologyEx(refined_mask, cv2.MORPH_OPEN, kernel)   # Remove small noise

# Apply the mask to retain only the pink chicken meat in the original color
segmented_image = cv2.bitwise_and(raw_img, raw_img, mask=refined_mask)

# Apply Canny edge detection to the segmented image
# First convert to grayscale
gray_segmented = cv2.cvtColor(segmented_image, cv2.COLOR_BGR2GRAY)
# Apply Gaussian blur to reduce noise
blurred = cv2.GaussianBlur(gray_segmented, (5, 5), 0)
# Apply Canny edge detection
edges = cv2.Canny(blurred, threshold1=30, threshold2=100)

# Skalierte Anzeige
scale_percent = 50  # Reduzieren auf 50% der Originalgröße
width = int(raw_img.shape[1] * scale_percent / 100)
height = int(raw_img.shape[0] * scale_percent / 100)
dim = (width, height)

# Bilder skalieren
resized_raw = cv2.resize(raw_img, dim, interpolation=cv2.INTER_AREA)
resized_segmented = cv2.resize(segmented_image, dim, interpolation=cv2.INTER_AREA)
resized_edges = cv2.resize(edges, dim, interpolation=cv2.INTER_AREA)

# Save the edge detection result
cv2.imwrite('edges.jpg', edges)

# Save the segmented image
output_path = 'segmented_image.jpg'
cv2.imwrite(output_path, segmented_image)

# Set up device - use MPS for MacBook Pro with Apple Silicon
device = torch.device("mps" if torch.backends.mps.is_available() else "cpu")
depth_model = depth_model.to(device)

# Get depth map
depth = depth_model.infer_image(segmented_image)  # HxW raw depth map

# Normalize the depth map
depth = depth / np.max(depth)  # Normalize to [0, 1]

# Convert depth map to 3D model (simplified)
height, width = depth.shape
focal_length = 5000  # Example focal length (adjust based on camera specs)
cx, cy = width / 2, height / 2  # Principal point (image center)

# Generate 3D points from the depth map
x, y = np.meshgrid(np.arange(width), np.arange(height))
x = (x - cx) * depth / focal_length
y = (y - cy) * depth / focal_length
z = depth

# Stack to form a point cloud (x, y, z)
point_cloud = np.stack((x, y, z), axis=-1)

# Estimate the volume of the object (simplified method using bounding box or convex hull)
volume = np.sum(depth) * (1 / focal_length)**2  # Simplified volume estimate

# Assuming average density of chicken breast: 1.03 g/cm³
density = 1.03  # g/cm³

# Convert volume to cm³ (assumes volume was in pixel units, which needs conversion)
volume_cm3 = volume * 5000  # Example conversion factor (adjust based on depth units)

# Estimate the weight
weight = density * volume_cm3

# Calculate the iron content
iron_per_100g = 0.73  # mg of iron per 100 g of chicken breast
total_iron = (weight / 100) * iron_per_100g  # Total iron content in mg

# Output the estimated weight and iron content
print(f"Estimated Weight: {weight:.2f} grams")
print(f"Estimated Iron Content: {total_iron:.2f} mg")

