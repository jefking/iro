// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function () {
        var c = '#ffffff';
        var letters = '0123456789ABCDEF'.split('');
        var c = '#';
        for (var i = 0; i < 6; i++) {
            c += letters[Math.floor(Math.random() * 16)];
        }
        document.body.style.backgroundColor = c;
  });
})
