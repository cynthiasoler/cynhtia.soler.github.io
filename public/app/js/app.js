var app = angular.module("portfolio", [
    'ngRoute',
    'ngMaterial'
]);


app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: 'app/views/main.html', controller: 'MainCtrl'})
        .when('/experiences', {templateUrl: 'app/views/experiences.html', controller: 'ExpCtrl'})
        .when('/portfolio', {templateUrl: 'app/views/portfolio.html', controller: 'PortfolioCtrl'})
        .when('/admin',{templateUrl: 'app/views/login.html', controller: 'LoginCtrl'})
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true).hashPrefix('!');
}]);