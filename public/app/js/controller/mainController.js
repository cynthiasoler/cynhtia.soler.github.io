angular.module("portfolio").controller("MainCtrl", function ($scope, $route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
});
