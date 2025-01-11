import React, { useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleUpload = async (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) {
      alert("No file selected!");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5001/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setProgresspercent(progress);
        },
      });

      setImgUrl(response.data.url);
      // Redirect to /tracking/upload using pure JavaScript (no Next.js routing)
      window.location.href = "/tracking/upload"; // This will redirect after upload

    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload file.");
    }
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" />
        <button type="submit">Upload</button>
      </form>

      {progresspercent > 0 && (
        <div style={{ marginTop: "20px" }}>
          <p>Upload Progress: {progresspercent}%</p>
          <div
            style={{
              width: "100%",
              backgroundColor: "#f3f3f3",
              borderRadius: "5px",
              overflow: "hidden",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: `${progresspercent}%`,
                backgroundColor: "green",
                height: "10px",
              }}
            ></div>
          </div>
        </div>
      )}

      {imgUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>Uploaded Image:</p>
          <img src={imgUrl} alt="Uploaded File" style={{ width: "200px" }} />
        </div>
      )}
    </div>
  );
};

export default UploadImage;