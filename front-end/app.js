'use strict'; 
angular
    .module('app', ['ngRoute'])
    .config(config)
    .directive('delButtonDirective', function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                $(elem).on('click', function() {
                    $('#delete-modal').modal('show');
                });
            }
        }
    })
    .directive('editButtonDirective', function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                $(elem).on('click', function() {
                    $('#edit-modal').modal('show');
                });
            }
        }
    })
    .directive('delEditDirective', function() {
        return {
            restrict: "A",
            scope: {},
            link: function(scope, elem, attrs) {
                $(elem).hover(function(){
                    $('.delete.button').css('visibility','visible');
                    $('.edit.button').css('visibility','visible');
                }, function(){
                    $('.delete.button').css('visibility','hidden');
                    $('.edit.button').css('visibility','hidden');
                });
            }
        }
    })

config.$inject = ['$routeProvider','$locationProvider'];

function config($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            'templateUrl':'views/main.view.html',
            'caseInsensitiveMatch':true
        })
}