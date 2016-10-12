var app = angular.module('NoiseTwitter', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.currentPage = '/main.html';

  $scope.characterLimit = 140;

  $scope.tweets = [
    {
      content: 'You give love a bad name.',
      author: 'JeffreyATW',
      avatar: 'avatar.jpg',
      time: '1h'
    },
    {
      content: 'Old McDonald had a farm.',
      author: 'JeffreyATW',
      avatar: 'avatar.jpg',
      time: '2h'
    },
    {
      content: 'I\'m a little teapot, short and stout.',
      author: 'JeffreyATW',
      avatar: 'avatar.jpg',
      time: '3h'
    }
  ];

  $scope.newTweetText = '';

  $scope.formValid = function () {
    var remainingCharacters = $scope.characterLimit - $scope.newTweetText.length
    return remainingCharacters < 0 || remainingCharacters === $scope.characterLimit;
  }

  $scope.addTweet = function () {
    $scope.tweets.unshift({
      author: 'JeffreyATW',
      avatar: 'avatar.jpg',
      time: 'now',
      content: $scope.newTweetText
    });

    $scope.newTweetText = '';
  };

  $scope.retweet = function(tweet) {
    tweet.retweeted = !tweet.retweeted;
  };

  $scope.like = function(tweet) {
    tweet.liked = !tweet.liked;
  };
}]);

