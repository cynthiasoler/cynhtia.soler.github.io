angular.module('portfolio').controller('PortfolioCtrl', function ($scope, $routeParams) {
    $scope.content = "Le portfolio";
    this.params = $routeParams;
});