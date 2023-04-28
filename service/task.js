const EmployeeModel = require("../models/Employee");
const TaskModel = require("../models/Task");

async function create(attributes) {
  const createdTask = await TaskModel.create(attributes);
  return createdTask;
}

async function assign(taskId, emplId) {
  await TaskModel.update({ employeeId: emplId }, { where: { id: taskId } });
  return findById(taskId);
}

async function unassign(taskId) {
  await TaskModel.update({ employeeId: null }, { where: { id: taskId } });
  return findById(taskId);
}

async function update(taskId, attributes) {
  await TaskModel.update(attributes, { where: { id: taskId } });
  return findById(taskId);
}

async function findById(taskId) {
  const createdTask = await TaskModel.findByPk(taskId);
  return createdTask;
}

async function findAll() {
  const allTasks = await TaskModel.findAll().then(async (rows) => {
    const tasksWithEmployees = [];

    for (const row of rows) {
      const { dataValues: task } = row;
      const associatedEmployee = await EmployeeModel.findByPk(task.employeeId);
      tasksWithEmployees.push({
        ...task,
        employee: associatedEmployee?.dataValues,
      });
    }

    return tasksWithEmployees;
  });

  return allTasks;
}

async function deleteById(taskId) {
  const foundTask = await findById(taskId);
  await TaskModel.destroy({ where: { id: taskId } });
  return foundTask;
}

const TaskService = {
  create,
  assign,
  unassign,
  update,
  findById,
  findAll,
  deleteById,
};

module.exports = TaskService;
