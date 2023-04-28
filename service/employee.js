const EmployeeModel = require("../models/Employee");
const TaskModel = require("../models/Task");

// creates a single employee
async function create(attributes) {
  const createdEmployee = await EmployeeModel.create(attributes);
  return createdEmployee;
}

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

// deletes an employee by id, returns the deleted document
async function deleteById(emplId) {
  const foundEmployee = await findById(emplId);
  await EmployeeModel.destroy({
    where: { id: emplId },
  });
  return foundEmployee;
}

const EmployeeService = {
  create,
  findById,
  findAll,
  deleteById,
};

module.exports = EmployeeService;
