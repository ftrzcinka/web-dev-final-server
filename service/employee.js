const EmployeeModel = require("../models/Employee");
const TaskModel = require("../models/Task");

// finds a single employee, as well as all of their assigned tasks
async function findById(employeeId) {
  const foundEmployee = await EmployeeModel.findByPk(employeeId);
  if (!foundEmployee) return null;

  const associatedTasks = await TaskModel.findAll({
    employeeId: foundEmployee.id,
  });

  return {
    employee: foundEmployee.dataValues,
    tasks: associatedTasks.map((task) => task.dataValues),
  };
}

// retrieves all employees
async function findAll() {
  const allEmployees = await EmployeeModel.findAll();
  return allEmployees.map((doc) => doc.dataValues);
}

const EmployeeService = {
  findById,
  findAll,
};

module.exports = EmployeeService;