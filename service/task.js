const TaskModel = require("../models/Task");

async function create(attributes) {
  const createdTask = await TaskModel.create(attributes);
  return createdTask;
}

async function assign(taskId, emplId) {
  const foundTask = await TaskModel.findByPk(taskId);
  const updatedTask = foundTask.update({ employeeId: emplId });
  return updatedTask;
}

async function unassign(taskId) {
  const foundTask = await TaskModel.findByPk(taskId);
  const updatedTask = foundTask.update({ employeeId: null });
  return updatedTask;
}

async function update(taskId, attributes) {
  const foundTask = await TaskModel.findByPk(taskId);
  const updatedTask = foundTask.update(attributes);
  return updatedTask;
}

async function findById(taskId) {
  const createdTask = await TaskModel.findByPk(taskId);
  return createdTask;
}

async function findAll() {
  const allTasks = await TaskModel.findAll({});
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
