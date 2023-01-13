-- departments
INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Legal");


-- roles
INSERT INTO role (title, department_id, salary)
VALUES ("Sales Lead", 1, 60000);

INSERT INTO role (title, department_id, salary)
VALUES ("Salesman", 1, 53000);

INSERT INTO role (title, department_id, salary)
VALUES ("Lead Engineer", 2, 92000);

INSERT INTO role (title, department_id, salary)
VALUES ("Software Engineer", 2, 87000);

INSERT INTO role (title, department_id, salary)
VALUES ("Accountant Manager", 3, 71000);

INSERT INTO role (title, department_id, salary)
VALUES ("Accountantr", 3, 67500);

INSERT INTO role (title, department_id, salary)
VALUES ("Legal Team Lead", 4, 110000);

INSERT INTO role (title, department_id, salary)
VALUES ("Lawyer", 4, 100000);


-- employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Will", "Ferrell", 1, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dwayne", "Johnson", 4, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Reily", 3, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Hanks", 1, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Seth", "Rogan", 3, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jonah", "Hill", 2, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Morgan", "Freeman", 4, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Carrell", 2, 3);