const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Task = db.define("Tasks", {
  user: {
    type: DataTypes.INTEGER,
    required: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  priority: {
    type: DataTypes.INTEGER,
    required: true,
  },
  completion: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Task;
