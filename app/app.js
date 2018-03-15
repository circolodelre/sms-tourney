
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            template: '<home/>'
        })
        .state('edit-devices', {
            url: '/edit-devices',
            template: '<edit-devices/>'
        });
});
