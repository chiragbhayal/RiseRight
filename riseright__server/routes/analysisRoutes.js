import express from 'express';
import {
  createAnalysis,
  getAllAnalyses,
  getAnalysisById,
  updateAnalysis,
  deleteAnalysis
} from '../controllers/analysisController.js';

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/analysis
// @desc    Create a new analysis entry
// @access  Private
router.post('/', protect, createAnalysis);

// @route   GET /api/analysis
// @desc    Get all analysis entries
// @access  Private
router.get('/', protect, getAllAnalyses);

// @route   GET /api/analysis/:id
// @desc    Get a specific analysis by ID
// @access  Private
router.get('/:id', protect, getAnalysisById);

// @route   PUT /api/analysis/:id
// @desc    Update an analysis by ID
// @access  Private
router.put('/:id', protect, updateAnalysis);

// @route   DELETE /api/analysis/:id
// @desc    Delete an analysis by ID
// @access  Private
router.delete('/:id', protect, deleteAnalysis);

export default router;
