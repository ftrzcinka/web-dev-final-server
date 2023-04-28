const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./models");
const bodyParser = require("body-parser");
const employeeRouter = require("./routes/employee");

connectToDatabase();

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("HELLO WORLD"));
app.use("/employee", employeeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port: ${PORT}`));
