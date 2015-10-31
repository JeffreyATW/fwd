/*setInterval(function () {
  $.ajax('tweet.php', {
    dataType: 'json'
  }).done(addNewTweet);
}, 5000);*/

ReactDOM.render(<NoiseTwitter />, document.getElementById('content'))

/*angular.module('NoiseTwitter', []);

angular.module('NoiseTwitter').controller('MainController', ['$scope', function ($scope) {
  $scope.hello = "Hi there!";

  $scope.tweets = [
    {
      author: 'JeffreyATW',
      time: '1h',
      content: 'You give love a bad name.'
    },
    {
      author: 'JeffreyATW',
      time: '2h',
      content: 'Old McDonald had a farm.'
    },
    {
      author: 'JeffreyATW',
      time: '3h',
      content: "I'm a little teapot, short and stout."
    }
  ];

  $scope.toggleRetweet = function (tweet) {
    tweet.retweeted = !tweet.retweeted;
  };

  $scope.toggleFavorite = function (tweet) {
    tweet.favorited = !tweet.favorited;
  };

  $scope.addNewTweet = function () {
    var newTweetObj = {
      author: 'JeffreyATW',
      time: 'now',
      content: $scope.newTweet
    };

    $scope.tweets.unshift(newTweetObj);

    $scope.newTweet = '';
  };
}]);*/