const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Employee = db.define("Employee", {
  firstname: {
    type: DataTypes.STRING,
    required: true,
  },
  lastname: {
    type: DataTypes.STRING,
    required: true,
  },
  department: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = Employee;
