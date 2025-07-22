import express from 'express';
import upload from '../utils/s3Uploader.js';

const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  res.status(200).json({
    message: 'File uploaded successfully',
    fileUrl: req.file.location,
  });
});

export default router;
