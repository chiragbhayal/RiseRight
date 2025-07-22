// routes/businessRoutes.js

import express from 'express';
import {
  getAllBusinesses,
  createBusiness,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
} from '../controllers/businessController.js';

const router = express.Router();

router.route('/')
  .get(getAllBusinesses)
  .post(createBusiness);

router.route('/:id')
  .get(getBusinessById)
  .put(updateBusiness)
  .delete(deleteBusiness);

export default router;
