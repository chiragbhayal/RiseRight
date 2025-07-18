const express = require('express');
const router = express.Router();
const { uploadFile } = require('../controllers/uploadController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/upload
// @desc    Upload a file to cloud storage
// @access  Private
router.post('/', protect, uploadFile);

module.exports = router;
