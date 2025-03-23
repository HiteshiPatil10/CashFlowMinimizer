import React, { useState } from "react";
import { addTransaction } from "../services/api"; // Import API call function

const TransactionForm = ({ onTransactionAdded }) => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    currency: "USD",
    type: "income", // Added type field for income/expense
  });

  const [exchangeRates] = useState({ USD: 1, EUR: 0.92, INR: 83.50 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert currency to USD before storing
    const convertedAmount = formData.amount * (exchangeRates[formData.currency] || 1);
    
    const newTransaction = {
      description: formData.description,
      amount: convertedAmount,
      type: formData.type, // Ensure "income" or "expense"
    };

    try {
      await addTransaction(newTransaction);
      onTransactionAdded(); // Refresh transactions in the main page
      setFormData({ description: "", amount: "", currency: "USD", type: "income" });
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <div>
      <h2>Enter Transactions</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Bank Name"
          required
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <select name="currency" value={formData.currency} onChange={handleChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
