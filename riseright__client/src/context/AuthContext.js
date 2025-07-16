// 🌐 context/AuthContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, getCurrentUser } from '../services/authService';
import api from '../services/api';

const AuthContext = createContext();

// ✅ AuthProvider for global authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Load user from localStorage on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      getCurrentUser()
        .then((res) => setUser(res))
        .catch(() => handleLogout());
    }
    setLoading(false);
  }, []);

  // 🔐 Handle login
  const handleLogin = async (credentials) => {
    try {
      const res = await login(credentials);
      setUser(res.user);
      localStorage.setItem('token', res.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${res.token}`;
    } catch (err) {
      throw err;
    }
  };

  // 🔓 Handle logout
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      // Ignore logout errors
    }
    setUser(null);
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, loading, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 📥 useAuth Hook
export const useAuth = () => useContext(AuthContext);
