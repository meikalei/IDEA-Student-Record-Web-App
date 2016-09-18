'use strict';

angular
    .module('app')
    .controller('StudentCtrl', StudentCtrl);

StudentCtrl.$inject = ['$scope', 'StudentService'];

function StudentCtrl($scope, StudentService) {

    $scope.students = [];

    populateStudents();

    function populateStudents() {
        StudentService.getAllStudents().success((students) => {
            $scope.students = students.students;
        })
    }

    $scope.student = {};

    $scope.addStudent = function(student) {
        StudentService.addStudent(student);
    }

    $scope.getCurrentStudent = function(student) {
        $scope.student = {
            id : student.id,
            name : student.name,
            batch : student.batch,
            studno : student.studno,
            course : student.course,
            college : student.college,
            sex : student.sex
        };
    }

    $scope.editStudent = function(student) {
        console.log(student);
        StudentService.editStudent(student);
    }

    $scope.deleteStudent = function() {
        console.log($scope.student.id);
        StudentService.deleteStudent($scope.student.id)
            .success(function(data) {
                alert('DELETED!');
            });
    }
}