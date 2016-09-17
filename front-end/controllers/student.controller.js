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
        StudentService
            .addStudent(student)
            .success(function (data) {
                console.log(data);
            });
    }
}