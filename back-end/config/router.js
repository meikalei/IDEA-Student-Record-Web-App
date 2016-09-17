'use strict';

const student = require(__dirname + '/../controllers/student');

module.exports = (router) => {

    router.del = router.delete;

    router.post('/api/student', (req, res) => {
        student.add_student(req.body, (status) => {
            res.json(status);
            console.log(status);
        });
    });

    router.get ('/api/all-students', (req, res) => {
        student.get_all_students((students) => {
            console.log(students);
            res.json({ students : students});
            console.log('SUCCESS GETTING STUDENTS');
        })
    });
    /*router.get ('/api/students/sex/:sex',           student.get_students_by_sex);
    router.get ('/api/students/batch/:batch',       student.get_students_by_batch);
    router.get ('/api/students/course/:course',     student.get_students_by_course);
    router.get ('/api/students/college/:college',   student.get_students_by_college);
    router.get ('/api/student/name/:name',          student.get_student_by_name);
    router.get ('/api/student/studno/:studno',      student.get_student_by_studno);
    router.put ('/api/student/:studno',             student.update_student);
    router.del ('/api/student/:studno',             student.delete_student);*/

    router.all('*', (req, res, next) => {
        res.status(404).send({
            message: 'Not Found!'
        });
    });

    return router;
};