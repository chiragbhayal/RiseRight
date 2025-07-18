import express from 'express';
import { upload } from '../utils/s3Uploader.js';

const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ imageUrl: req.file.location });
});

export default router;
