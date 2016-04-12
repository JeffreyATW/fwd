var app = angular.module('NoiseTwitter', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  }).when('/tweets/:id', {
    templateUrl: 'show.html',
    controller: 'ShowCtrl'
  });
}]);

app.factory('tweets', function () {
  return [
    {
      content: 'You give love a bad name.',
      author: 'JeffreyATW',
      time: '1h'
    },
    {
      content: 'Old McDonald had a farm.',
      author: 'JeffreyATW',
      time: '2h'
    },
    {
      content: 'I\'m a little teapot, short and stout.',
      author: 'JeffreyATW',
      time: '3h'
    }
  ];
});

app.controller('MainCtrl', ['$scope', 'tweets', function ($scope, tweets) {
  $scope.maxLength = 140;

  $scope.tweets = tweets;

  $scope.tweetText = '';

  $scope.addTweet = function () {
    $scope.tweets.unshift({
      content: $scope.tweetText,
      author: 'JeffreyATW',
      time: 'now'
    });

    $scope.tweetText = '';
  };

  $scope.cantTweet = function () {
    return $scope.tweetText.length === 0 || $scope.tweetText.length > $scope.maxLength;
  }
}]);

app.controller('ShowCtrl', ['$scope', '$routeParams', 'tweets',
  function ($scope, $routeParams, tweets) {
    $scope.tweet = tweets[$routeParams.id];
  }
]);

app.directive('tweet', function () {
  return {
    scope: {
      tweet: '='
    },
    replace: true,
    templateUrl: 'tweet.html',
    link: function ($scope) {
      $scope.like = function () {
        $scope.tweet.liked = !$scope.tweet.liked;
      }

      $scope.retweet = function () {
        $scope.tweet.retweeted = !$scope.tweet.retweeted;
      }
    }
  };
});
