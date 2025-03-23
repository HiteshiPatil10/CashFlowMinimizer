import React, { useState } from "react";

const BankForm = ({ onNext }) => {
  const [numBanks, setNumBanks] = useState(0);
  const [banks, setBanks] = useState([]);

  const handleNumBanksChange = (e) => {
    const count = parseInt(e.target.value) || 0;
    setNumBanks(count);
    setBanks(Array(count).fill({ name: "", types: [] }));
  };

  const handleBankChange = (index, field, value) => {
    const updatedBanks = [...banks];
    if (field === "types") {
      updatedBanks[index][field] = value.split(","); // Convert string to array
    } else {
      updatedBanks[index][field] = value;
    }
    setBanks(updatedBanks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Banks Data:", banks);
    onNext(banks); // Move to transaction page
  };

  return (
    <div>
      <h2>Enter Bank Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Number of Banks:</label>
        <input type="number" value={numBanks} onChange={handleNumBanksChange} required />

        {banks.map((bank, index) => (
          <div key={index}>
            <label>Bank Name:</label>
            <input
              type="text"
              value={bank.name}
              onChange={(e) => handleBankChange(index, "name", e.target.value)}
              required
            />
            <label>Payment Modes (comma separated):</label>
            <input
              type="text"
              value={bank.types.join(",")}
              onChange={(e) => handleBankChange(index, "types", e.target.value)}
              required
            />
          </div>
        ))}

        <button type="submit">Next: Enter Transactions</button>
      </form>
    </div>
  );
};

export default BankForm;
