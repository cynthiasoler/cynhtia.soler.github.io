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
angular.module('portfolio').controller('ExpCtrl', function ($scope, $routeParams) {
    $scope.exps = [[{
        what: 'team Work',
        notes: 'Sometimes it was hard'
    },{
        what: 'ijrvbeqlihvbe',
        notes: 'jvbvhbtihb zirverhvbrihvbr, ' +
        'rverbhvbekvuq ebvaeivyerv, rfxbiar'
    },{
        what: 'ijrvbeqlihvbe',
        notes: 'jvbvhbtihb'
    }],
        [{
            what: 'team Work',
            notes: 'Sometimes it was hard'
        },{
            what: 'ijrvbeqlihvbe',
            notes: 'jvbvhbtihb zirverhvbrihvbr, ' +
            'rverbhvbekvuq ebvaeivyerv, rfxbiar'
        },{
            what: 'ijrvbeqlihvbe',
            notes: 'jvbvhbtihb'
        }]];
});
angular.module("portfolio").controller("MainCtrl", function ($scope, $route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;

    $scope.identity = {
        lastName: "Soler",
        firstName: "Cynthia"
    };
});
angular.module('portfolio').controller('PortfolioCtrl', function ($scope, $routeParams) {
    $scope.content = "Le portfolio";
    this.params = $routeParams;
});