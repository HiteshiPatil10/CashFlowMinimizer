const express = require("express");
const router = express.Router();
const Transaction = require("./models/Transaction"); // ✅ Import model

// 🟢 CREATE: Add a new transaction
router.post("/transactions", async (req, res) => {
    try {
        const { description, amount, type } = req.body;
        const transaction = await Transaction.create({ description, amount, type });
        res.status(201).json(transaction);
    } catch (error) {
        console.error("❌ Error creating transaction:", error);
        res.status(500).json({ error: "Error creating transaction" });
    }
});

// 🔵 READ: Get all transactions
router.get("/transactions", async (req, res) => {
    try {
        const transactions = await Transaction.findAll();
        res.json(transactions);
    } catch (error) {
        console.error("❌ Error fetching transactions:", error);
        res.status(500).json({ error: "Error fetching transactions" });
    }
});

// 🟡 UPDATE: Edit a transaction
router.put("/transactions/:id", async (req, res) => {
    try {
        const { description, amount, type } = req.body;
        const updated = await Transaction.update(
            { description, amount, type },
            { where: { id: req.params.id } }
        );

        if (updated[0] === 0) {
            return res.status(404).json({ error: "Transaction not found" });
        }

        res.json({ message: "Transaction updated successfully" });
    } catch (error) {
        console.error("❌ Error updating transaction:", error);
        res.status(500).json({ error: "Error updating transaction" });
    }
});

// 🔴 DELETE: Remove a transaction
router.delete("/transactions/:id", async (req, res) => {
    try {
        const deleted = await Transaction.destroy({ where: { id: req.params.id } });

        if (!deleted) {
            return res.status(404).json({ error: "Transaction not found" });
        }

        res.json({ message: "Transaction deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting transaction:", error);
        res.status(500).json({ error: "Error deleting transaction" });
    }
});

// ✅ Root Route (Check if the backend is running)
router.get("/", (req, res) => {
    res.send("Welcome to CashFlow Backend!");
});

module.exports = router; // ✅ Export router
