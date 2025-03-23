import axios from "axios";

const API_URL = "http://localhost:5000/api/transactions"; // Adjust the URL if needed

// Fetch all transactions
export const getTransactions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error.response?.data || error.message);
    return []; // Return empty array on failure
  }
};

// Add a new transaction
export const addTransaction = async (transaction) => {
  try {
    const response = await axios.post(API_URL, transaction, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding transaction:", error.response?.data || error.message);
    throw error;
  }
};
