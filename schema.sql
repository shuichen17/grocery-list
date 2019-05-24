/*  Execute this file from the command line by typing:
 *    mysql -u -root < schema.sql
 *  to create the database and the tables.*/

 /* create the database
 create a schema
 it should create the database and a table insert 3 example times
 SQL goes outside of comment
 */
DROP DATABASE IF EXISTS grocery_list;
CREATE DATABASE grocery_list;
USE grocery_list;
CREATE TABLE groceries (
    id int AUTO_INCREMENT UNIQUE,
    name varchar(255) NOT NULL,
    quantity int
);
INSERT INTO groceries (name, quantity) VALUES ("egg rolls", 4);
INSERT INTO groceries (name, quantity) VALUES ("gummy bears", 500);
INSERT INTO groceries (name, quantity) VALUES ("CHEETOS", 20);

/* show database
use groceries_list
 show table
 describe groceries
 select * from groceries*/