'use strict';

angular
    .module('app')
    .factory('StudentService', StudentService);

function StudentService($http) {
    return {
        addStudent : function(student) {
            return $http.post('/api/student',
                {
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
        }
    }
}