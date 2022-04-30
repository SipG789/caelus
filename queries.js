const db = require('./config/connection');
const inquirer = require('inquirer');
const { promptUser } = require('./server');

const viewDepartment = function () {
    // open employeeDB
    // promise wrapper
    return new Promise(function (resolve, reject) {
        db.query(
            'SELECT * FROM `department`;'
    , (error, res) => {
    resolve(res);
    })
    }) 
};

const viewRoles = function () {
    // promise wrapper
    return new Promise(function (resolve, reject) {
        db.query(
            'SELECT * FROM `role`;'
    , (error, res) => {
    resolve(res);
    })
    }) 
};

const viewEmployees = function () {
    // promise wrapper
    return new Promise(function (resolve, reject) {
        db.query(
            'SELECT * FROM `employee`;'
    , (error, res) => {
    resolve(res);
    })
    }) 
};

const addDepartment = function () {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'deptChoice',
                message: 'What is the name of the department?',
             },
        ])
        .then((answer) => {
            const deptName = answer.deptChoice;
            let departSql = `INSERT INTO department (department_name) VALUES (?)`;
                db.query(departSql, deptName, (error, res) => {
            if (error) throw error;
            console.log("New department added!");
            });
    });
};




module.exports = { viewDepartment, viewRoles, viewEmployees, addDepartment }