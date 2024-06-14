import express from 'express';
import multer from 'multer'; // Make sure multer is imported

const router = express.Router();

// Multer storage configuration (customize as per your needs)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Uploads folder path
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // File naming logic
  }
});

const upload = multer({ storage: storage });

// Route for uploading resume
router.post('/upload-resume', upload.single('resume'), (req, res) => {
  // Handle resume upload logic here
  // Access the uploaded file using req.file
  // Example: save file details to database, etc.

  res.status(200).json({ message: 'Resume uploaded successfully' });
});

export default router;
