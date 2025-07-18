const Business = require('../models/Business');
const asyncHandler = require('express-async-handler');

// @desc    Create a new business entry
// @route   POST /api/business
// @access  Private
const createBusiness = asyncHandler(async (req, res) => {
  const { name, industry, location, revenue, employees, description } = req.body;

  const business = new Business({
    user: req.user._id,
    name,
    industry,
    location,
    revenue,
    employees,
    description,
  });

  const createdBusiness = await business.save();
  res.status(201).json(createdBusiness);
});

// @desc    Get all businesses for the logged-in user
// @route   GET /api/business
// @access  Private
const getBusinesses = asyncHandler(async (req, res) => {
  const businesses = await Business.find({ user: req.user._id });
  res.json(businesses);
});

// @desc    Get a single business by ID
// @route   GET /api/business/:id
// @access  Private
const getBusinessById = asyncHandler(async (req, res) => {
  const business = await Business.findById(req.params.id);

  if (business && business.user.equals(req.user._id)) {
    res.json(business);
  } else {
    res.status(404);
    throw new Error('Business not found or not authorized');
  }
});

// @desc    Update a business
// @route   PUT /api/business/:id
// @access  Private
const updateBusiness = asyncHandler(async (req, res) => {
  const { name, industry, location, revenue, employees, description } = req.body;

  const business = await Business.findById(req.params.id);

  if (business && business.user.equals(req.user._id)) {
    business.name = name || business.name;
    business.industry = industry || business.industry;
    business.location = location || business.location;
    business.revenue = revenue || business.revenue;
    business.employees = employees || business.employees;
    business.description = description || business.description;

    const updatedBusiness = await business.save();
    res.json(updatedBusiness);
  } else {
    res.status(404);
    throw new Error('Business not found or not authorized');
  }
});

// @desc    Delete a business
// @route   DELETE /api/business/:id
// @access  Private
const deleteBusiness = asyncHandler(async (req, res) => {
  const business = await Business.findById(req.params.id);

  if (business && business.user.equals(req.user._id)) {
    await business.remove();
    res.json({ message: 'Business removed' });
  } else {
    res.status(404);
    throw new Error('Business not found or not authorized');
  }
});

module.exports = {
  createBusiness,
  getBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
};
