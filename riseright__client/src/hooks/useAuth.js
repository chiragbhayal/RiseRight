// 📁 hooks/useAuth.js

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

/**
 * Custom hook to access authentication context
 * Provides user data, loading state, and login/logout functions
 */
const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('❌ useAuth must be used within an AuthProvider');
  }

  return context;
};

export default useAuth;
