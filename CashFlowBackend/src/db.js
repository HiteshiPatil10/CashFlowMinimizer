const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables

const sequelize = new Sequelize(
  process.env.DB_NAME,       // Database Name (railway)
  process.env.DB_USER,       // Username (root)
  process.env.DB_PASSWORD,   // Password from Railway
  {
    host: process.env.DB_HOST,  // Railway Host
    port: process.env.DB_PORT || 3306,  // MySQL default port is 3306
    dialect: process.env.DB_DIALECT || "mysql", // Ensure MySQL dialect is set
    logging: false, // Disable query logs
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => console.log("✅ Connected to Railway MySQL Database"))
  .catch((err) => console.error("❌ Database Connection Error:", err));

module.exports = sequelize;
