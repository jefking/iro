'use strict';

var iroApp = angular.module('iroApp', ['ionic']);

iroApp.controller('server', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
   
    function callback() {
        $http.get('http://iro.azurewebsites.net/color').
        success(function (data) {
            $scope.payload = data;
        });
    }

    $interval(callback, 15000);
}]);