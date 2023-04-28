require('dotenv').config()

const { Sequelize } = require("sequelize");
const CONNECTION_URL = process.env.CONNECTION_URL;
// Option 3: Passing parameters separately (other dialects)
module.exports = new Sequelize(CONNECTION_URL);
