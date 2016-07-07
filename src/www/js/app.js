'use strict';

var iroApp = angular.module('iroApp', ['ionic']);

iroApp.controller('server', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://iro.azurewebsites.net/').
   success(function (data) {
       $scope.payload = data;
   });
}]);