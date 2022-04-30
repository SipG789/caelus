// TODO: install mysql2, inquirer, console.table packages, package json & lock.json
const inquirer = require('inquirer');
const db = require('./config/connection');
const { viewDepartment, viewRoles } = require('./queries'); 

// TODO: make queries asynchronous 

// TODO: add tables in a separate file that contains functions for performing specific SQL queries 
// TODO: include a seeds.sql file to pre-populate databases in order to make individual features easier
// TODO: add department table 
// TODO: add role table
// TODO: add employee table 


const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menuChoice',
            message: 'Please select an action',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an Employee', 'Update Employee role']

        },
    ])
    .then( promptChoice => {

        let menuChoice = promptChoice.menuChoice

        //departments 
        if(menuChoice === 'View all departments') {
            viewDepartment().then(data => {
                console.log(data);
            })
            // let departments = await viewDepartment()
            // console.log(departments);
        }
        // roles 
        else if (menuChoice === 'View all roles') {
            viewRoles().then(data => {
                console.log(data);
            })
        }





    })
}



// TODO: BONUS!!! update employee manager, view employees by managers, view employees by department,  
    // delete departments, roles, and employees, view the total utilized budget of a dept. (combined salaries of all)
promptUser();