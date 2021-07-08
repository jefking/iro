'use strict';

var radishApp = angular.module('radishApp', []);

radishApp.controller('server', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {

    var sampleData =
    {
        currentTime: '100', // time at the server, for synchronization. 100 is an arbitrary value
        repeatEvery: '40000',
        patterns:
        [
            {
                endAt: '30000',
                repeatEvery: '9000',
                colors:
                [
                    { color: '#000000', endAt: '4000' },
                    { color: '#00ff00', endAt: '5000' },
                    { color: '#000000', endAt: '6000' },
                    { color: '#00ff00', endAt: '7000' },
                    { color: '#000000', endAt: '9000' },
                ]
            },
            {
                endAt: '60000',
                repeatEvery: '6000',
                colors:
                [
                    { color: '#00ddcc', endAt: '2000' },
                    { color: '#cc00dd', endAt: '4000' },
                    { color: '#ddcc00', endAt: '6000' },
                ]
            }
        ]
    }

    var localTime = 0;
    var difference = 0;

    function initialQuery() {
        $http.get('http://iro.azurewebsites.net/color').
        success(function (data) {
            $scope.color = data.color;

            localTime = Date.now();
            difference = localTime - sampleData.currentTime;
        });
    }

    function callback() {
        var now = Date.now() - difference;
        var patternTime = now % sampleData.repeatEvery;
        console.log("patternTime: " + patternTime + " = " + now + " % " + sampleData.repeatEvery);
        var currentPattern = sampleData.patterns.find(isCurrentPattern(patternTime));
        if (currentPattern == null) {
            console.log("No pattern available at time " + patternTime);
            return;
        }
        var colorTime = now % currentPattern.repeatEvery;
        console.log("colorTime: " + colorTime + " = " + now + " % " + currentPattern.repeatEvery);
        var currentColor = currentPattern.colors.find(isCurrentColor(colorTime));
        if (currentColor == null) {
            console.log("No color available at time " + colorTime);
            return;
        }
        $scope.color = currentColor.color;
    }

    function isCurrentPattern(now) {
        return function (element) {
            //console.log("comparing endAt " + JSON.stringify(element.endAt) + " with now " + now + "\n")
            return element.endAt > now || element.endAt === '-1';
        }
    }

    function isCurrentColor(colorTime) {
        return function (element) {
            //console.log("comparing endAt " + JSON.stringify(element) + " with colorTime" + colorTime + "\n")
            return element.endAt > colorTime;
        }
    }

    initialQuery();
    $interval(callback, 1000);
}]);