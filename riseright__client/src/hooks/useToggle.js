// 📁 hooks/useToggle.js

import { useState, useCallback } from 'react';

/**
 * Custom hook to toggle a boolean state (e.g., modal, dropdown, theme)
 *
 * @param {boolean} initialValue - The initial state value (default is false)
 * @returns [value, toggle] - The current value and a function to toggle it
 */
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
};

export default useToggle;
