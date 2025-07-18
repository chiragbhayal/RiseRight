const express = require('express');
const router = express.Router();
const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/jobs
// @desc    Create a new job posting
router.post('/', protect, createJob);

// @route   GET /api/jobs
// @desc    Get all job postings
router.get('/', protect, getAllJobs);

// @route   GET /api/jobs/:id
// @desc    Get a job by ID
router.get('/:id', protect, getJobById);

// @route   PUT /api/jobs/:id
// @desc    Update a job posting
router.put('/:id', protect, updateJob);

// @route   DELETE /api/jobs/:id
// @desc    Delete a job posting
router.delete('/:id', protect, deleteJob);

module.exports = router;
