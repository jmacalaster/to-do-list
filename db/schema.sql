-- Put this code in your MySQL query to run it 

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE todolist_db;
USE todolist_db;

-- Create the table toDos.
CREATE TABLE toDos
(
id int NOT NULL AUTO_INCREMENT,
task varchar(255) NOT NULL,
completed boolean,
PRIMARY KEY (id)
);

-- Seed a set of records.
INSERT INTO toDos (task, completed) VALUES ('Do bootcamp homework.', false);
INSERT INTO toDos (task, completed) VALUES ('Run invoice audit.', false);
INSERT INTO toDos (task, completed) VALUES ('Complete copy for the new site.', false);
