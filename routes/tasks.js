const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Task = require('../models/Employee');

router.get('/', (req, res) =>
    Task.findAll()
    .then(tasks => {
        console.log(tasks);
        res.sendStatus(404);
    })
    .catch(err => console.log(err)));

module.exports = router;