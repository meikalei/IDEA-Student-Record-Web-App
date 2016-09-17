'use strict'; 
angular
    .module('app', ['ngRoute'])
    .config(config)
config.$inject = ['$routeProvider','$locationProvider'];

function config($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            'templateUrl':'views/main.view.html',
            'caseInsensitiveMatch':true
        })
        .when('/all-students', {
            'templateUrl':'views/students.view.html',
            'caseInsensitiveMatch':true
        })
        .when('/add-student', {
            'templateUrl':'views/addStudent.view.html',
            'caseInsensitiveMatch':true
        })
        .when('/inventory', {
            'templateUrl':'views/item.view.html',
            'caseInsensitiveMatch':true
        })
}