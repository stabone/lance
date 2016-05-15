var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/partials/index.html'
        }).
        when('/equipment', {
            templateUrl: '/partials/equipment.html'
        }).
        when('/contacts', {
            templateUrl: '/partials/contacts.html'
        }).
        otherwise({ redirectTo: '/'});
}]);
