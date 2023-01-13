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
    database: 'books_db'
  },
  console.log(`Connected to the office_db database.`)
);