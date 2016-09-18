'use strict';

const db = require(__dirname + '/../lib/mysql');
const _ = require(__dirname + '/xss');

exports.add_student = (req, res, next) => {
    const query_string ='INSERT INTO student SET ?'; 
    const payload = {
        id : req.body.id,
        name : req.body.name,
        batch : req.body.batch,
        studno : req.body.studno,
        course : req.body.course,
        college : req.body.college,
        sex : req.body.sex
    }
    
    db.query(query_string, payload, (err, data) => {
        if(!err) {
            console.log('STUDENT SUCCESSFULLY ADDED!');
        } else {
            console.log(err);
        }
    });
};

exports.get_all_students = (req, res, next) => {
    const query_string = 'SELECT * FROM student';

    db.query(query_string, (err, students) => {
        if(!err) {
            console.log(students);
            res.json({ students : students});
            console.log('SUCCESS GETTING STUDENTS');
        } else {
            console.log(err);
        }
    });
};

exports.edit_student = (req, res, next) => {
    const query_string ='UPDATE student SET id = ?, name = ?, batch = ?, studno = ?, course = ?, college = ?, sex = ? WHERE id = ?';
    const id = req.body.batch + req.body.studno;
    const payload = [id, req.body.name, req.body.batch, req.body.studno, req.body.course, req.body.college, req.body.sex, req.body.id];

    console.log(id);
    
    db.query(query_string, payload, (err, data) => {
        if(!err) {
            console.log('STUDENT SUCCESSFULLY UPDATED!');
        } else {
            console.log(err);
        }
    });
};

exports.delete_student = (req, res, next) => {
    const query_string ='DELETE FROM student WHERE id = ?'; 
    const payload = [req.params.id];

    console.log(payload);
    
    db.query(query_string, payload, (err, data) => {
        if(!err) {
            console.log('STUDENT SUCCESSFULLY DELETED!');
        } else {
            console.log(err);
        }
    });
};