const express = require("express");
const multer = require("multer");
const admin = require("firebase-admin");

const app = express();

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "snaptrack-e5f4e.firebasestorage.app",
});

const bucket = admin.storage().bucket();

// Multer setup
const upload = multer({ storage: multer.memoryStorage() });

// Upload endpoint
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).send("No file uploaded.");
    }

    const blob = bucket.file(`uploads/${file.originalname}`);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobStream.on("error", (error) => {
      console.error("Error during upload:", error);
      res.status(500).send(error.message);
    });

    blobStream.on("finish", async () => {
      const downloadURL = await blob.getSignedUrl({
        action: "read",
        expires: "03-01-2030",
      });
      res.status(200).send({ url: downloadURL });
    });

    blobStream.end(file.buffer);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Internal server error.");
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));