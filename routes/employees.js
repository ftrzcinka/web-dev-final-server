const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Employee = require('../models/Employee');

router.get('/', (req, res) =>
    Employee.findAll()
    .then(employees => {
        console.log('You are in Employees page');
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

//Add employee
router.post('/add', (req, res) => {
    const data = {
        firstname: 'Asher',
        lastname: 'Whitlocke',
        department: 'Security',
        tasks: []
    }

    let {firstname, lastname, department, tasks} = data;

    Employee.create({
        firstname,
        lastname,
        department,
        tasks
    })
    .then(employee => {
        console.log('New Employee added to database')
        res.redirect('/employees')
    })
    .catch(err => console.log(err));
});

module.exports = router;