// src/services/businessService.js

import api from './api';

// 🏢 Submit a new business idea
export const createBusiness = async (businessData) => {
  try {
    const response = await api.post('/business', businessData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 📋 Get all businesses for the current user
export const getMyBusinesses = async () => {
  try {
    const response = await api.get('/business/my');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 📄 Get a single business by ID
export const getBusinessById = async (id) => {
  try {
    const response = await api.get(`/business/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 📝 Update a business by ID
export const updateBusiness = async (id, updatedData) => {
  try {
    const response = await api.put(`/business/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ❌ Delete a business by ID
export const deleteBusiness = async (id) => {
  try {
    const response = await api.delete(`/business/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
