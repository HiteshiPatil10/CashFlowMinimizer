const { DataTypes } = require("sequelize");
const sequelize = require("../db"); // ✅ Import database connection

// ✅ Define Transaction model
const Transaction = sequelize.define("Transaction", {
    description: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    type: { type: DataTypes.ENUM("income", "expense"), allowNull: false }
});

module.exports = Transaction; // ✅ Export model
