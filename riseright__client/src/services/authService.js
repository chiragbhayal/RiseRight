import axios from './api';

// Login user
export const login = async (credentials) => {
  const response = await axios.post('/auth/login', credentials);
  return response.data;
};

// Logout user
export const logout = async () => {
  const response = await axios.post('/auth/logout');
  return response.data;
};

// Register new user
export const register = async (userData) => {
  const response = await axios.post('/auth/register', userData);
  return response.data;
};

// Get current logged-in user
export const getCurrentUser = async () => {
  const response = await axios.get('/auth/me');
  return response.data;
};

// ✅ Update user profile
export const updateUser = async (userData) => {
  const response = await axios.put('/auth/update', userData);
  return response.data;
};
