const express = require("express");
const TaskService = require("../service/task");

const taskRouter = express.Router();

taskRouter.post("/create", async (request, response) => {
  try {
    const taskAttributes = request.body;
    const createdTask = await TaskService.create(taskAttributes);
    response.status(200).json(createdTask);
  } catch (error) {
    response.status(500).json(error);
  }
});

taskRouter.get("/all", async (request, response) => {
  try {
    const allTasks = await TaskService.findAll();
    response.status(200).json(allTasks);
  } catch (error) {
    response.status(500).json(error);
  }
});

taskRouter.get("/:id", async (request, response) => {
  try {
    const emplId = parseInt(request.params.id);
    const foundTask = await TaskService.findById(emplId);
    if (!foundTask) response.status(404).json("No task found");
    else {
      response.status(200).json(foundTask);
    }
  } catch (error) {
    response.status(500).json(error);
  }
});

taskRouter.delete("/:id", async (request, response) => {
  try {
    const taskId = parseInt(request.params.id);
    const deletedTask = await TaskService.deleteById(taskId);

    if (!deletedTask) response.status(404).json("No task found");
    else {
      response.status(200).json(deletedTask);
    }
  } catch (error) {
    response.status(500).json(error);
  }
});

taskRouter.put("/assign/:id", async (request, response) => {
  try {
    const taskId = parseInt(request.params.id);
    const { employeeid } = request.body;
    const updatedTask = await TaskService.assign(taskId, employeeid);

    response.status(200).json(updatedTask);
  } catch (error) {
    response.status(500).json(error);
  }
});

taskRouter.put("/unassign/:id", async (request, response) => {
  try {
    const taskId = parseInt(request.params.id);
    const updatedTask = await TaskService.unassign(taskId);

    response.status(200).json(updatedTask);
  } catch (error) {
    response.status(500).json(error);
  }
});

taskRouter.put("/update/:id", async (request, response) => {
  try {
    const taskId = parseInt(request.params.id);
    const updatedTaskAttributes = request.body;

    const updatedTask = await TaskService.update(taskId, updatedTaskAttributes);
    response.status(200).json(updatedTask);
  } catch (error) {
    response.status(500).json(error);
  }
});
module.exports = taskRouter;
