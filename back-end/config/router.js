'use strict';

const student = require(__dirname + '/../controllers/student');

module.exports = (router) => {

    router.del = router.delete;

    router.post('/api/add-student',         student.add_student);
    router.get ('/api/all-students',        student.get_all_students);
    router.put ('/api/edit-student',        student.edit_student);
    router.del ('/api/delete-student/:id',  student.delete_student);

    router.all('*', (req, res, next) => {
        res.status(404).send({
            message: 'Not Found!'
        });
    });

    return router;
};