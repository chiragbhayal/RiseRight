const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getCurrentUserProfile,
  updateUserProfile,
  logoutUser,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/auth/register
router.post('/register', registerUser);

// @route   POST /api/auth/login
router.post('/login', loginUser);

// @route   POST /api/auth/logout
router.post('/logout', logoutUser);

// @route   GET /api/auth/me
router.get('/me', protect, getCurrentUserProfile);

// @route   PUT /api/auth/me
router.put('/me', protect, updateUserProfile);

module.exports = router;
