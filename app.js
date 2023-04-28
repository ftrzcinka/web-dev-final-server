const express = require("express");
//Database
const db = require("./config/database");

db.authenticate()
  .then(async () => {
    console.log("Database connected...");
  })
  .catch((err) => console.log("Error: " + err));

const app = express();

app.get("/", (req, res) => res.send("HELLO WORLD"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port: ${PORT}`));
