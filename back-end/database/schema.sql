DROP DATABASE IF EXISTS student_record;
CREATE DATABASE student_record;

USE student_record;

CREATE TABLE student (
	name VARCHAR(100) NOT NULL,
	batch INT(4) NOT NULL,
	studno VARCHAR(6) NOT NULL,
	course VARCHAR(10) NOT NULL,
	college ENUM('CAS','CEAT','CDC','CHE','CEM','CFNR','CA','GS'),
	sex ENUM('Male','Female'),
	PRIMARY KEY(batch, studno)
);