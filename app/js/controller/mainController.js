angular.module("portfolio").controller("MainCtrl", ['$scope', '$route', '$routeParams', '$location', function ($scope, $route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}]);
