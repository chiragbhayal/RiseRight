// 📁 hooks/useFetch.js

import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Custom hook to perform HTTP GET requests
 *
 * @param {string} url - API endpoint to fetch data from
 * @param {object} options - Axios config options (headers, params, etc.)
 * @returns {object} - { data, loading, error, refetch }
 */
const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, options);
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, refetchIndex]);

  const refetch = () => setRefetchIndex((prev) => prev + 1);

  return { data, loading, error, refetch };
};

export default useFetch;
