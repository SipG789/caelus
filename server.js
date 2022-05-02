// TODO: install mysql2, inquirer, console.table packages, package json & lock.json
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./config/connection');
const { viewDepartment, viewRoles, viewEmployees, addDepartment } = require('./queries'); 

// TODO: make queries asynchronous 

//  add tables in a separate file that contains functions for performing specific SQL queries 
//  include a seeds.sql file to pre-populate databases in order to make individual features easier
//  add department table 
//  add role table
//  add employee table 


const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menuChoice',
            message: 'Please select an action',
            choices: [
            'View all departments', 
            'View all roles', 
            'View all employees', 
            'Add a department', 
            'Add a role', 
            'Add an Employee', 
            'Update Employee role']
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
        // employees
        else if (menuChoice === 'View all employees') {
            viewEmployees().then(data => {
                console.log(data);
            })
        }
        // add department
        else if (menuChoice === 'Add a department') {
            addDepartment().then(data => {
                console.log(data);
            })
        }
        // add a role 
        else if (menuChoice === 'Add a role') {
            viewEmployees().then(data => {
                console.log(data);
            })
        }
        // add employee
        else if (menuChoice === 'View all employees') {
            viewEmployees().then(data => {
                console.log(data);
            })
        }



    })
}



// TODO: BONUS!!! update employee manager, view employees by managers, view employees by department,  
    
// delete departments, roles, and employees, view the total utilized budget of a dept. (combined salaries of all)




promptUser();

module.exports = { promptUser };