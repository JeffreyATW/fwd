angular.module('counter', []);

angular.module('counter').controller('MainCtrl', function ($scope) {
  $scope.counter = 0;

  $scope.incrementCounter = function () {
    $scope.counter += 1;
  }
});