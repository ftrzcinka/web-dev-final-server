const express = require("express");
const connectToDatabase = require("./models");
const employeeRouter = require("./routes/employee");

connectToDatabase();

const app = express();

app.get("/", (req, res) => res.send("HELLO WORLD"));
app.use("/employee", employeeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port: ${PORT}`));
