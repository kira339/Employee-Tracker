const inquirer = require("inquirer");
const mysql = require("mysql2");
require('dotenv').config()

//view all departments
// view all roles
// view all employees
//add department
//add role
//add employee
//update employee role

const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log("Connected to the company_db database....")
);

db.connect((err) => {
    if (err) {
        throw error;
    }
});
//inqurir

function promptUser() {
    return inquirer.prompt([
        {
            type: "list",
            name: "displayChoices",
            message: "Please choose an option",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]


        }
    ]).then((selectedOption) => {
        switch (selectedOption.displayChoices) {
            case "view all departments":
                viewDepartments()
                break;
            case "view all roles":
                viewRoles()
                break;
            case "view all employees":
                viewEmployees()
                break;
            case "add a department":
                addDepartment()
                break;
            case "add a role":
                addRole()
                break;
            case "add an employee":
                addEmployee()
                break;
            case "update an employee role":
                updateEmployeeRole()
                break;
            default:
                console.log("you are exiting");
                break;
        }
    })

}

//Write a function for each case statement
//function will need to query based of option literal

function viewDepartments() {
    db.query('SELECT * FROM company_db.department;', function (err, results) {
        console.log(results)
        promptUser()
    })
}
function viewRoles() {
    db.query('select role.title, role.id, role.salary, department.name from department RIGHT JOIN role on department.id = role.department_id;'
        , function (err, results) {
            console.log(results)
            promptUser()
        })
}
function viewEmployees() {
    // finish manager part of query
    db.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee LEFT JOIN role ON role.id = employee.role_id JOIN department ON role.department_id = department.id;'
    , function (err, results) {
        console.log(results)
        promptUser()
    })
}
function addDepartment() {

}
function addRole() {

}
function addEmployee() {

}
function updateEmployeeRole() {

}