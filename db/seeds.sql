USE employeeDB;

INSERT INTO department
(department_name)
VALUES 
('finance'),
('science');

INSERT INTO role
(title, salary, department_id)
VALUES
('manager', 30000, 2),
('science', 20000, 2);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Manny', 'Gonzalez', 1, NULL),
('Johnny', 'Smith', 2, 1);