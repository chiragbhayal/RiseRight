// controllers/analysisController.js

import asyncHandler from 'express-async-handler';
import axios from 'axios';

// @desc    Analyze growth for a given business
// @route   POST /api/analysis/growth
// @access  Private
export const predictGrowth = asyncHandler(async (req, res) => {
  const { revenue, employees, industry, location } = req.body;

  try {
    const response = await axios.post('http://localhost:5000/predict_growth', {
      revenue,
      employees,
      industry,
      location,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in growth analysis:', error.message);
    res.status(500);
    throw new Error('Failed to analyze growth');
  }
});

// @desc    Get business tips
// @route   GET /api/analysis/tips
// @access  Private
export const generateTips = asyncHandler(async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/generate_tips');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error generating tips:', error.message);
    res.status(500);
    throw new Error('Failed to generate tips');
  }
});

// @desc    Recommend resources for a business
// @route   POST /api/analysis/resources
// @access  Private
export const matchResources = asyncHandler(async (req, res) => {
  const { industry, location } = req.body;

  try {
    const response = await axios.post('http://localhost:5000/resource_matcher', {
      industry,
      location,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error recommending resources:', error.message);
    res.status(500);
    throw new Error('Failed to recommend resources');
  }
});

// @desc    Suggest business locations
// @route   POST /api/analysis/location
// @access  Private
export const suggestLocations = asyncHandler(async (req, res) => {
  const { industry } = req.body;

  try {
    const response = await axios.post('http://localhost:5000/suggest_location', {
      industry,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error suggesting location:', error.message);
    res.status(500);
    throw new Error('Failed to suggest location');
  }
});
 