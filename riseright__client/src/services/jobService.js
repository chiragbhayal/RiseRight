// src/services/jobService.js

import api from './api';

// 🎓 Get relevant universities or institutions for talent acquisition
export const getRecommendedUniversities = async (businessType) => {
  try {
    const response = await api.get(`/jobs/universities?type=${businessType}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 📌 Post a new job or opportunity
export const postJob = async (jobData) => {
  try {
    const response = await api.post(`/jobs`, jobData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 📄 Get all job posts
export const getAllJobs = async () => {
  try {
    const response = await api.get(`/jobs`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
