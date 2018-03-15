
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

app.run(function($rootScope, $http) {
    $http.post('/i').then(function(resp) {
        $rootScope.devices = resp.data.devices;
        console.log($rootScope.devices);
    });
});

app.run(function() {
    $(document).on('click', '[store-target]', function() {
        $($(this).attr('store-target')).addClass('is-active');
    });
    $(document).on('click', '.modal-background', function() {
        $(this).parent().removeClass('is-active');
    });
});

