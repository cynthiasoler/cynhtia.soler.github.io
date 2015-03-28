var app = angular.module("portfolio", [
    'ngRoute',
    'ngMaterial'
]);


app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: 'view/main.html', controller: 'MainCtrl'})
        .when('/experiences', {templateUrl: 'view/experiences.html', controller: 'ExpCtrl'})
        .when('/portfolio', {templateUrl: 'view/portfolio.html', controller: 'PortfolioCtrl'});



    $locationProvider.html5Mode(true);
}]);