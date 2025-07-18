import express from 'express';
import {
  registerUser,
  loginUser,
  getCurrentUserProfile,
  updateUserProfile,
  logoutUser,
} from '../controllers/authController.js';

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

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

export default router;
