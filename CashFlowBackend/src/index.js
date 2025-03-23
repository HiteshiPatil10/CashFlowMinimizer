const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./db"); // Import database connection
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Use API Routes
app.use("/api", routes);

// ✅ Root Route (Homepage)
app.get("/", (req, res) => {
    res.send("Welcome to CashFlow Backend!");
});

// ✅ Start Server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ Database Sync Error:", err));
