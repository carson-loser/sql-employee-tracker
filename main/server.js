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
  console.log(`Connected to the office_db database!`)
);

function main() {
function questions() {
  inquirer
    .prompt({
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

        case 'View all departments':
          viewDepartments()
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

        case 'Add an employee':
          addEmployee()
          break;

        case 'Update an employee role':
          updateEmployeeRole();
          break;

        default:
          db.end()
          break;
      }
    })
}

function viewDepartments() {
  db.query(`SELECT * FROM department`, (err, data) => {
    console.table(data);
    questions();
  });
}

function viewRoles() {
  db.query(`SELECT * FROM roles`, (err, data) => {
    console.table(data);
    questions();
  });
}

function viewEmployees() {
  db.query(`SELECT * FROM employees`, (err, data) => {
    console.table(data);
    questions();
  });
}

function addDepartment() {
  inquirer
    .prompt({
      type: 'input',
      name: 'department',
      message: 'What is the name of the department?'
    }).then(function(res) {
      db.query(`INSERT INTO department WHERE name = ?`, (err, data) => {
        console.table(data);
        questions();
      });
    })
}

function addRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the role?'
      },
      {
        type: 'number',
        name: 'salary',
        message: 'What is the roles salary?'
      },
      {
        type: 'list',
        name: 'department',
        message: 'What department does this role belong to?',
        choices: [
          'Sales',
          'Engineering',
          'FInance',
          'Legal',
        ],
      },
    ]).then(function(response) {
      db.query(`INSERT INTO roles WHERE title = [?, ?, ?]`, [response.title, response.salary, response.department], (err, data) => {
        console.table(data);
        questions();
      });
    })
}

// function addEmployee() {
//   db.query(`SELECT * FROM employees`, (err, data) => {
//     console.table(data);
//     questions();
//   });
// }

}
main();