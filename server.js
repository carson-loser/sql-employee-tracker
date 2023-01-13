const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    // add MySQL password
    password: '',
    database: 'office_db'
  },
  console.log(`Connected to the office_db database.`)
);

function questions() {
  inquirer.prompt({
    type: 'list',
    message: 'What would you like to do?',
    name: 'question',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role'
    ],

  }).then(newInput => {
    console.log(newInput.question);
    switch (newInput.question) {

      case "View all departments":
        viewDepartments()
        break;

      case "View all roles":
        viewRoles()
        break;

      case "View all employees":
        viewEmployees()
        break;

      case "Add a department":
        addDepartment()
        break;

      case "Add a role":
        addRole()
        break;

      case "Add an employee":
        addEmployee()
        break;

      case "Update an employee role":
        updateEmployeeRole();
        break;

      default:
        db.end()
        break;
    }
  })
}