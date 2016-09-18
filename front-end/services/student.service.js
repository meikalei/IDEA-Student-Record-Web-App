'use strict';

angular
    .module('app')
    .factory('StudentService', StudentService);

function StudentService($http) {
    return {
        addStudent : function(student) {
            return $http.post('/api/add-student',
                {
                    id : student.batch + student.studno,
                    name : student.name,
                    batch : student.batch,
                    studno : student.studno,
                    course : student.course,
                    college : student.college,
                    sex : student.sex
                }
            );
        },

        getAllStudents : function() {
            return $http.get('/api/all-students');
        },

        editStudent : function(student) {
            return $http.put('/api/edit-student',
                {
                    id : student.id,
                    name : student.name,
                    batch : student.batch,
                    studno : student.studno,
                    course : student.course,
                    college : student.college,
                    sex : student.sex
                }
            );
        },

        deleteStudent : function(id) {
            $http.delete('/api/delete-student/' + id);
        }
    }
}