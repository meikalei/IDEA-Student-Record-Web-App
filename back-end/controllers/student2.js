'use strict';

const db = require(__dirname + '/../lib/mysql');
const _ = require(__dirname + '/xss');

exports.add_student = (req, res) => {
    const query_string ='INSERT INTO student SET ?'; 
    const payload = {
        name : req.body.name,
        batch : req.body.batch,
        studno : req.body.studno,
        course : req.body.course,
        college : req.body.college,
        sex : req.body.sex
    }
    console.log(payload);
    
    db.query(query_string, payload, (err, data) => {
        if(!err) {
            console.log(data);
        } else {
            console.log(err);
        }
    });
};

exports.get_all_students = (req, res) => {
    const query_string = 'SELECT * FROM student';

    db.query(query_string, (err, students) => {
        console.log(students);
        res.json({ students : students});
        console.log('SUCCESS GETTING STUDENTS');
    });
};

/*exports.get_students_by_sex = (req, res, next) => {
    const query_string = 'SELECT * FROM student WHERE sex = ?';
    const payload = [req.params.sex];

    db.query(query_string, payload, (err, data) => {
        res.send(data);
    });
};

exports.get_students_by_batch = (req, res, next) => {
    const query_string = 'SELECT * FROM student WHERE batch = ?';
    const payload = [req.params.batch];

    db.query(query_string, payload, (err, data) => {
        res.send(data);
    });
};

exports.get_students_by_course = (req, res, next) => {
    const query_string = 'SELECT * FROM student WHERE course = ?';
    const payload = [req.params.course];

    db.query(query_string, payload, (err, data) => {
        res.send(data);
    });
};

exports.get_students_by_college = (req, res, next) => {
    const query_string = 'SELECT * FROM student WHERE college = ?';
    const payload = [req.params.college];

    db.query(query_string, payload, (err, data) => {
        res.send(data);
    });
};

exports.get_student_by_name = (req, res, next) => {
    const query_string = 'SELECT * FROM student WHERE name = ?';
    const payload = [req.params.name];

    db.query(query_string, payload, (err, data) => {
        res.send(data);
    });
};

exports.get_student_by_studno = (req, res, next) => {
    const query_string = 'SELECT * FROM student WHERE studno = ?';
    const payload = [req.params.studno];

    db.query(query_string, payload, (err, data) => {
        res.send(data);
    });
};

exports.update_student = (req, res, next) => {
    const query_string ='UPDATE student SET name = ?, batch = ?, studno = ?, course = ?, college = ?, sex = ? WHERE studno = ?'; 
    const payload = [req.body.name, req.body.batch, req.body.studno, req.body.course, req.body.college, req.body.sex, req.params.studno];
    
    db.query(query_string, payload, (err, data) => {
        res.send(data);
    });
};

exports.delete_student = (req, res, next) => {
    const query_string ='DELETE FROM student WHERE student_number = ?'; 
    const payload = [req.params.student_number];
    
    db.query(query_string, payload, (err, data) => {
        res.send(data);
    });
};*/