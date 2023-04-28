const express = require("express");
const connectToDatabase = require("./models");

connectToDatabase();

const app = express();

app.get("/", (req, res) => res.send("HELLO WORLD"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port: ${PORT}`));
