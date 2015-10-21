angular.module('counter', []);

angular.module('counter').controller('MainController', ['$scope', function ($scope) {
  $scope.counter = 0;

  $scope.incrementCounter = function () {
    $scope.counter += 1;
  }
}]);