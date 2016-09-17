'use strict';

const student = require(__dirname + '/../controllers/student');

module.exports = (router) => {

    router.del = router.delete;

    router.post('/',                    student.add_student);
    router.get ('/api/students',                    student.get_all_students);
    router.get ('/api/students/sex/:sex',           student.get_students_by_sex);
    router.get ('/api/students/batch/:batch',       student.get_students_by_batch);
    router.get ('/api/students/course/:course',     student.get_students_by_course);
    router.get ('/api/students/college/:college',   student.get_students_by_college);
    router.get ('/api/student/name/:name',          student.get_student_by_name);
    router.get ('/api/student/studno/:studno',      student.get_student_by_studno);
    router.put ('/api/student/:studno',             student.update_student);
    router.del ('/api/student/:studno',             student.delete_student);

    router.all('*', (req, res, next) => {
        res.status(404).send({
            message: 'Not Found!'
        });
    });

    return router;
};