// src/services/analysisService.js

import api from './api';

// 📈 Analyze business growth potential
export const analyzeGrowth = async (businessId) => {
  try {
    const response = await api.post(`/analysis/growth`, { businessId });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 🌍 Get recommended locations if current one shows loss
export const suggestBetterLocations = async (businessId) => {
  try {
    const response = await api.post(`/analysis/location`, { businessId });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 📊 Get growth tips and recommendations
export const getGrowthSuggestions = async (businessId) => {
  try {
    const response = await api.post(`/analysis/suggestions`, { businessId });
    return response.data;
  } catch (error) {
    throw error;
  }
};
