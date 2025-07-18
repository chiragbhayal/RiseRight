const asyncHandler = require('express-async-handler');
const Job = require('../models/Job');

// @desc    Create a new job posting
// @route   POST /api/jobs
// @access  Private
const createJob = asyncHandler(async (req, res) => {
  const { title, company, location, description, salary } = req.body;

  const job = new Job({
    user: req.user._id,
    title,
    company,
    location,
    description,
    salary,
  });

  const createdJob = await job.save();
  res.status(201).json(createdJob);
});

// @desc    Get all job postings
// @route   GET /api/jobs
// @access  Public
const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({}).sort({ createdAt: -1 });
  res.status(200).json(jobs);
});

// @desc    Get my job postings
// @route   GET /api/jobs/my
// @access  Private
const getMyJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.status(200).json(jobs);
});

// @desc    Delete a job posting
// @route   DELETE /api/jobs/:id
// @access  Private
const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }

  if (job.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to delete this job');
  }

  await job.remove();
  res.status(200).json({ message: 'Job removed successfully' });
});

module.exports = {
  createJob,
  getAllJobs,
  getMyJobs,
  deleteJob,
};
