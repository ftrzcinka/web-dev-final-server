const express = require("express");
const EmployeeService = require("../service/Employee");

const employeeRouter = express.Router();

module.exports = employeeRouter;

employeeRouter.get("/all", async (request, response) => {
  try {
    const allEmployees = await EmployeeService.findAll();
    response.status(200).json(allEmployees);
  } catch {
    response.status(500).json("Could not perform query");
  }
});

employeeRouter.get("/:id", async (request, response) => {
  try {
    const emplId = parseInt(request.params.id);
    const employee = await EmployeeService.findById(emplId);
    if (!employee) response.status(404).json("No employee exists");

    response.status(200).json(employee);
  } catch {
    response.status(500).json("Could not perform query");
  }
});     
