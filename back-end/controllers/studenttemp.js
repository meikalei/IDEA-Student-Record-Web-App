'use strict';

const db = require(__dirname + '/../lib/mysql');
const _ = require(__dirname + '/xss');

exports.add_student = (student, success) => {
    const query_string ='INSERT INTO student SET ?'; 
    const payload = {
        name : student.name,
        batch : student.batch,
        studno : student.studno,
        course : student.course,
        college : student.college,
        sex : student.sex
    };
    console.log(payload);
    
    db.query(query_string, payload, (err, data) => {
        if(!err) {
            success({ status : 'successful' });
            console.log(data);
        } else {
            console.log(err);
        }
    });
};

exports.get_all_students = (callback) => {
    const query_string = 'SELECT * FROM student';

    db.query(query_string, (err, rows, fields) => {
        if(!err) {
            callback(rows);
            console.log(rows);
        } else {
            console.log(err);
        }
    });
};

/*exports.update_student = (req, res, next) => {
    const query_string ='UPDATE student SET name = ?, batch = ?, studno = ?, course = ?, college = ?, sex = ? WHERE studno = ?'; 
    const payload = [req.body.name, req.body.batch, req.body.studno, req.body.course, req.body.college, req.body.sex, req.params.studno];
    
    db.query(query_string, payload, (err, data) => {
        res.send(data);
    });
};*/

exports.delete_student = (student, success) => {
    const query_string ='DELETE FROM student WHERE student_number = ?'; 
    const payload = [req.params.student_number];
    
    db.query(query_string, payload, (err, data) => {
        res.send(data);
    });
};