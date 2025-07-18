const express = require('express');
const router = express.Router();
const {
  createBusiness,
  getMyBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
} = require('../controllers/businessController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/business
router.post('/', protect, createBusiness);

// @route   GET /api/business
router.get('/', protect, getMyBusinesses);

// @route   GET /api/business/:id
router.get('/:id', protect, getBusinessById);

// @route   PUT /api/business/:id
router.put('/:id', protect, updateBusiness);

// @route   DELETE /api/business/:id
router.delete('/:id', protect, deleteBusiness);

module.exports = router;
