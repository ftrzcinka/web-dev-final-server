const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Task = db.define("Tasks", {
  description: {
    type: DataTypes.STRING,
    required: true,
  },
  priority: {
    type: DataTypes.INTEGER,
    required: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    required: true,
  },
  employeeId: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Task;
