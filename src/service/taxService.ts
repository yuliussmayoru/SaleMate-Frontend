// services/taxService.ts
import { axiosInstance } from "../api/axiosClient";

export const fetchTaxConfig = async () => {
  try {
    const response = await axiosInstance.get('/tax/config');
    return response.data; // Assuming the response contains VAT and service charges
  } catch (error) {
    console.error('Error fetching tax config:', error);
    throw error;
  }
};
