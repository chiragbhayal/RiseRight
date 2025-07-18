const asyncHandler = require('express-async-handler');
const cloudinary = require('../config/cloudinary');

// @desc    Upload a file to Cloudinary
// @route   POST /api/upload
// @access  Private
const uploadFile = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error('No file uploaded');
  }

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'riseright_uploads',
    });

    res.status(201).json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    res.status(500);
    throw new Error('File upload failed');
  }
});

module.exports = { uploadFile };
