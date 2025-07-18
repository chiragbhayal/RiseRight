// routes/analysisRoutes.js

import express from 'express';
import {
  predictGrowth,
  suggestLocations,
  recommendUniversities,
  generateTips,
  matchResources,
} from '../controllers/analysisController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/analysis/growth
router.post('/growth', protect, predictGrowth);

// @route   POST /api/analysis/location
router.post('/location', protect, suggestLocations);

// @route   POST /api/analysis/universities
router.post('/universities', protect, recommendUniversities);

// @route   POST /api/analysis/tips
router.post('/tips', protect, generateTips);

// @route   POST /api/analysis/resources
router.post('/resources', protect, matchResources);

export default router;
