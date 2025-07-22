// routes/jobRoutes.js

import express from 'express';

const router = express.Router();

// Example GET route
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Job routes working fine ✅' });
});

// You can add more routes here
// Example POST route for creating a job
router.post('/', (req, res) => {
  const jobData = req.body;
  // Logic to save jobData in database will go here
  res.status(201).json({ message: 'Job created successfully', data: jobData });
});

// Example route to get job by ID
router.get('/:id', (req, res) => {
  const jobId = req.params.id;
  // Logic to fetch job by ID from DB
  res.status(200).json({ message: `Fetching job with ID: ${jobId}` });
});

export default router;
