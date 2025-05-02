import axios from "axios";
import { API_BASE_URL, ENDPOINTS } from "./config";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.PRODUCTS}`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.PRODUCTS}/${id}`);
  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await axios.post(`${API_BASE_URL}${ENDPOINTS.ORDERS}`, orderData);
  return response.data;
};

export const getUserOrders = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.ORDERS}?userId=${userId}`);
  return response.data;
};

export const createUserProfile = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}${ENDPOINTS.USERS}`, userData);
  return response.data;
};