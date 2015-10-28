angular.module('counter', []);

angular.module('counter').controller('MainController', ['$scope', function ($scope) {
}]);

angular.module('counter').directive('counterButton', function () {
  return {
    link: function ($scope) {
      $scope.counter = 0;

      $scope.incrementCounter = function () {
        $scope.counter += 1;
      }
    },
    replace: true,
    restrict: 'E',
    scope: true,
    templateUrl: 'button.html'
  }
});