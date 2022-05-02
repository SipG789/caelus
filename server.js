//  install mysql2, inquirer, console.table packages, package json & lock.json
const inquirer = require('inquirer');
const db = require('./config/connection');
const cTable = require('console.table');

 

//  add tables in a separate file that contains functions for performing specific SQL queries 
//  include a seeds.sql file to pre-populate databases in order to make individual features easier
//  add department table 
//  add role table
//  add employee table 


const promptUser = () => {
    inquirer
    .prompt([
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
            'Exit' 
            ]
        },
    ])
    .then((answer) => {
        switch (answer.menuChoice) {
            case 'View all departments':
                viewDepartment()
                break;
            case 'View all roles':
                viewRoles()
                break;
            case 'View all employees':
                viewEmployees()
                break;
            case 'Add a department':
                addDepartment()
                break;
            case 'Add a role':
                addRole()
                break;
            case 'Add an Employee':
                addEmployee()
                break;
            case 'Exit':
                default:
                break;

        }
    });
};

// view department
const viewDepartment = () => {
    const viewDept = 'SELECT * FROM department';
    db.query(viewDept, (err, res) => {
        console.table(res);
        promptUser();
    });
};

// view roles
const viewRoles = () => {
    const selectRole = 'SELECT * FROM role';
    db.query(selectRole, (err, res) => {
        console.table(res);
        promptUser();
    });
};

// view employees
const viewEmployees = () => {
    const viewEmp = 'SELECT * FROM employee';
    db.query(viewEmp, (err,res) => {
        console.table(res);
        promptUser();
    });
};

// add department
const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'deptChoice',
                message: 'What is the name of the department?'
            }
        ])
        .then((res) => {
            const deptChoice = res.deptChoice;
            const deptName = `INSERT INTO department (department_name) VALUES ('${deptChoice}')`;
            db.query(deptName, (err, res) => {
                if (err) {
                    throw err;
                }
                console.table(res);
                promptUser();
            });
        });
};

const addRole = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter Employee Title'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter Employee Salary'
            },
            {
                type: 'input',
                name: 'deptId',
                message: 'Enter Employees Department ID'
            }
        ])
        .then((res) => {
            const title = res.title;
            const salary = res.salary;
            const deptId = res.deptId;
            const newRole = `INSERT INTO role (title, salary, department_id) VALUES ('${title}', '${salary}', '${deptId}')`;
                db.query(newRole, (err, res) => {
                    if (err) {
                        throw err;
                    }
                    console.table(res);
                    promptUser();
                });            
        });
};


const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the first name of the employee?'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'What is the last name of the employee?'
            },
            {
                type: 'input',
                name: 'empRole',
                message: 'What is their employee ID?'
            },
            {
                type: 'input',
                name: 'empMang',
                message: 'What is their Managers ID?'
            }
        ])
        .then((res) => {
            const firstName = res.firstName;
            const lastName = res.lastName;
            const empRole = res.empRole;
            const empMang = res.empMang;
            const newEmployee = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', '${empRole}', '${empMang}')`;
            db.query(newEmployee, (err, res) => {
                if (err) {
                    throw err;
                }
                console.table(res);
                promptUser();
            });
        });
};



// TODO: BONUS!!! update employee manager, view employees by managers, view employees by department,  
    
// delete departments, roles, and employees, view the total utilized budget of a dept. (combined salaries of all)




promptUser();

