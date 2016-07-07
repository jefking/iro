'use strict';

var iro = angular.module('iro', ['ionic']);

iro.controller('server', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://iro.azurewebsites.net/').
       success(function (data) {
           $scope.payload = data;
       });
}]);