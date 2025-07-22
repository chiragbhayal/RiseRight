import Business from '../models/Business.js';

// @desc    Get all businesses
// @route   GET /api/businesses
// @access  Public
export const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// @desc    Create a new business
// @route   POST /api/businesses
// @access  Public
export const createBusiness = async (req, res) => {
  const { name, industry, description } = req.body;

  try {
    const newBusiness = new Business({
      name,
      industry,
      description
    });

    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (error) {
    res.status(400).json({ message: 'Invalid business data', error });
  }
};

// @desc    Get a business by ID
// @route   GET /api/businesses/:id
// @access  Public
export const getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);

    if (business) {
      res.json(business);
    } else {
      res.status(404).json({ message: 'Business not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// @desc    Update a business
// @route   PUT /api/businesses/:id
// @access  Public
export const updateBusiness = async (req, res) => {
  const { name, industry, description } = req.body;

  try {
    const business = await Business.findById(req.params.id);

    if (business) {
      business.name = name || business.name;
      business.industry = industry || business.industry;
      business.description = description || business.description;

      const updatedBusiness = await business.save();
      res.json(updatedBusiness);
    } else {
      res.status(404).json({ message: 'Business not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid data or server error', error });
  }
};

// @desc    Delete a business
// @route   DELETE /api/businesses/:id
// @access  Public
export const deleteBusiness = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);

    if (business) {
      await business.remove();
      res.json({ message: 'Business removed' });
    } else {
      res.status(404).json({ message: 'Business not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
