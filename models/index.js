const db = require("../config/database");
const TaskModel = require("./Task");
const EmployeeModel = require("./Employee");

async function syncModels() {
  await TaskModel.sync();
  await EmployeeModel.sync();
}

async function dropTables() {
  await db.drop().then(() => {
    console.log("Dropped all tables");
  });
}

async function displayTableNames() {
  await db
    .query(
      `SELECT table_name
        FROM information_schema.tables
        WHERE table_schema='public'
        AND table_type='BASE TABLE';`
    )
    .then(function (rows) {
      console.table(
        rows[0].map((row) => ({
          name: row.table_name,
        }))
      );
    });
}

async function connectToDatabase() {
  await db.authenticate();
  await syncModels();
  await displayTableNames();
}

module.exports = connectToDatabase;
