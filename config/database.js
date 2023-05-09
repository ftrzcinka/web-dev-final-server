require("dotenv").config();

const { Sequelize } = require("sequelize");
const CONNECTION_URL = process.env.CONNECTION_URL;

module.exports = new Sequelize(CONNECTION_URL);