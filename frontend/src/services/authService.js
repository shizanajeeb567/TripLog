import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const login = async (credentials) => {
  const response = await axios.post(`${API}/auth/login`, credentials);
  return response;
};

export const register = async (userData) => {
  const response = await axios.post(`${API}/auth/signup`, userData);
  return response;
};
