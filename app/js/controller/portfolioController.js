angular.module('portfolio').controller('PortfolioCtrl',['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.content = "Le portfolio";
    this.params = $routeParams;
}]);
