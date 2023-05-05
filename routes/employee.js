const express = require("express");
const EmployeeService = require("../service/Employee");

const employeeRouter = express.Router();

employeeRouter.post("/create", async (request, response) => {
  try {
    const employeeAttributes = request.body;
    const createdEmployee = await EmployeeService.create(employeeAttributes);
    response.status(200).json(createdEmployee);
  } catch (error) {
    response.status(500).json(error);
  }
});

employeeRouter.get("/all", async (request, response) => {
  try {
    const allEmployees = await EmployeeService.findAll();
    response.status(200).json(allEmployees);
  } catch (error) {
    response.status(500).json(error);
  }
});

employeeRouter.get("/:id", async (request, response) => {
  try {
    const emplId = parseInt(request.params.id);
    const employee = await EmployeeService.findById(emplId);
    if (!employee) response.status(404).json("No employee exists");
    else {
      response.status(200).json(employee);
    }
  } catch (error) {
    response.status(500).json(error);
  }
});

employeeRouter.put("/:id", async (request, response) => {
  try {
    const emplId = parseInt(request.params.id);
    const updatedEmployeeAttributes = request.body;

    const updatedEmployee = await EmployeeService.update(
      emplId,
      updatedEmployeeAttributes
    );
    response.status(200).json(updatedEmployee);
  } catch (error) {
    response.status(500).json({ error: error.toString() });
  }
});

employeeRouter.delete("/:id", async (request, response) => {
  try {
    const emplId = parseInt(request.params.id);
    const deletedEmployee = await EmployeeService.deleteById(emplId);

    if (!deletedEmployee) response.status(404).json("No employee exists");
    else {
      response.status(200).json(deletedEmployee);
    }
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = employeeRouter;
