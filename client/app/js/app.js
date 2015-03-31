var app = angular.module("portfolio", [
    'ngRoute',
    'ngMaterial'
]);


app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: 'app/view/main.html', controller: 'MainCtrl'})
        .when('/experiences', {templateUrl: 'app/view/experiences.html', controller: 'ExpCtrl'})
        .when('/portfolio', {templateUrl: 'app/view/portfolio.html', controller: 'PortfolioCtrl'})
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
}]);