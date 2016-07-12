'use strict';

var radishApp = angular.module('radishApp');

radishApp.controller('server', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
   
    function callback() {
        $http.get('http://iro.azurewebsites.net/color').
        success(function (data) {
            $scope.payload = data;
        });
    }

    $interval(callback, 5000);
}]);