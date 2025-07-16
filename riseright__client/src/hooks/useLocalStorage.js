// 📁 hooks/useLocalStorage.js

import { useState, useEffect } from 'react';

/**
 * Custom hook to synchronize state with localStorage
 *
 * @param {string} key - The key to store the value under
 * @param {*} initialValue - The initial value if localStorage is empty
 * @returns [storedValue, setStoredValue] - The value and a setter
 */
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`useLocalStorage: Error loading ${key}`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`useLocalStorage: Error saving ${key}`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
