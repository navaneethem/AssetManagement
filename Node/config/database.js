const { Sequelize } = require("sequelize");
const db = new Sequelize("assetManagement", "sqlite", "Welcome123", {
  host: "localhost",
  dialect: "sqlite",
  storage:"config/db.sqlite",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  
});

module.exports = db;