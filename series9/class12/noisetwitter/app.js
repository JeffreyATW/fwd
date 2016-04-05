var app = angular.module('NoiseTwitter', []);

app.controller('MainCtrl', function ($scope) {
  $scope.maxLength = 140;

  $scope.tweets = [
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

  $scope.like = function (tweet) {
    tweet.liked = !tweet.liked;
  }

  $scope.retweet = function (tweet) {
    tweet.retweeted = !tweet.retweeted;
  }
});
