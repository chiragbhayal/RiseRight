// src/services/uploadService.js

import api from './api';

// ⬆️ Upload a file (e.g., business plan, supporting docs)
export const uploadFile = async (formData) => {
  try {
    const response = await api.post(`/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 📄 Get uploaded files (optional: per business ID or user ID)
export const getUploadedFiles = async () => {
  try {
    const response = await api.get(`/upload/files`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
