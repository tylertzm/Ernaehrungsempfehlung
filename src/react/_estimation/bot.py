import os
import numpy as np
import cv2
import torch
from depth_anything_v2.dpt import DepthAnythingV2

def predict_estimation(img, known_distance_cm=30, threshold_level=10, min_valid_pixels=5000):
    """
    Estimates the weight, iron, and magnesium content of a chicken breast using depth estimation.

    Parameters:
        img (file object): The input image file.
        known_distance_cm (float): Distance from the camera to the object (default: 30 cm).
        threshold_level (int): The sensitivity threshold for segmentation (default: 10).
        min_valid_pixels (int): Minimum pixel count to validate a detected region.

    Returns:
        weight (float): Estimated weight of the chicken in grams.
        total_iron (float): Estimated iron content in mg.
        total_magnesium (float): Estimated magnesium content in mg.
    """

    # Load Depth Anything V2 model
    model_configs = {'vits': {'encoder': 'vits', 'features': 64, 'out_channels': [48, 96, 192, 384]}}
    depth_model = DepthAnythingV2(**model_configs['vits'])
    filepath = "src/react/_estimation/depth_anything_v2/checkpoints/Depth Anything V2.pth"
    
    depth_model.load_state_dict(torch.load(filepath, map_location="cpu"))
    depth_model.eval()

    img = np.array(bytearray(img.read()), dtype=np.uint8)
    raw_img = cv2.imdecode(img, cv2.IMREAD_COLOR) 

    # Convert to HSV
    hsv_image = cv2.cvtColor(raw_img, cv2.COLOR_BGR2HSV)

    # Adjust HSV thresholds dynamically based on threshold_level
    h_lower = max(0, 10 - threshold_level)  # Adjust Hue lower bound
    h_upper = min(30, 20 + threshold_level)  # Adjust Hue upper bound
    s_lower = max(5, 50 - threshold_level * 5)  # Adjust Saturation lower bound
    s_upper = min(255, 255)  # Saturation stays at max
    v_lower = max(50, 100 - threshold_level * 5)  # Adjust Value lower bound
    v_upper = min(255, 255)  # Value stays at max

    pink_lower = (h_lower, s_lower, v_lower)
    pink_upper = (h_upper, s_upper, v_upper)

    # Create the initial mask
    pink_mask = cv2.inRange(hsv_image, np.array(pink_lower), np.array(pink_upper))
    valid_pixels = np.sum(pink_mask > 0)

    # If not enough pixels detected, use an alternative broader mask
    if valid_pixels < min_valid_pixels:
        pink_lower = (max(0, h_lower - 5), max(0, s_lower - 20), max(0, v_lower - 20))
        pink_upper = (min(30, h_upper + 5), min(255, s_upper + 20), min(255, v_upper + 20))
        pink_mask = cv2.inRange(hsv_image, np.array(pink_lower), np.array(pink_upper))

    # Morphological refinements
    kernel = np.ones((5, 5), np.uint8)
    refined_mask = cv2.morphologyEx(pink_mask, cv2.MORPH_CLOSE, kernel)
    refined_mask = cv2.morphologyEx(refined_mask, cv2.MORPH_OPEN, kernel)

    # Extract segmented region
    segmented_image = cv2.bitwise_and(raw_img, raw_img, mask=refined_mask)

    # Save segmented image
    cv2.imwrite("segmented_chicken.jpg", segmented_image)

    # Set up device
    device = torch.device("mps" if torch.backends.mps.is_available() else "cpu")
    depth_model = depth_model.to(device)

    # Get depth map
    depth = depth_model.infer_image(segmented_image)

    # Normalize and scale depth
    depth_scaled = (depth / np.max(depth)) * known_distance_cm  

    # Convert depth map to volume estimation
    volume = np.sum(depth_scaled) * (1 / 5000)**2  

    # Estimate weight using chicken density
    density = 1.03  
    volume_cm3 = volume * 5000  
    weight = round(density * volume_cm3, 2)

    # Calculate iron content
    iron_per_100g = 0.73  # mg of iron per 100 g of chicken breast
    total_iron = round((weight / 100) * iron_per_100g, 2)

    # Calculate magnesium content
    magnesium_per_100g = 25  # mg of magnesium per 100 g of chicken breast
    total_magnesium = round((weight / 100) * magnesium_per_100g, 2)

    return weight, total_iron, total_magnesium