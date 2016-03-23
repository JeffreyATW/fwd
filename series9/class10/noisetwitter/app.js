var tweetboxField = $('.tweetbox__field');
var tweetboxCounter = $('.tweetbox__counter');
var tweetboxButton = $('.tweetbox__button');
var tweets = $('.tweets');

var maxLength = 140;

var addNewTweet = function (response) {  
  var newTweet = $('.tweet').first().clone();

  newTweet.find('.tweet__time').text('now');

  newTweet.find('.tweet__content').text(response.tweet_content);

  newTweet.find('.tweet__author').text(response.tweet_author);

  newTweet.find('.tweet__avatar img').prop('src', response.tweet_avatar);

  newTweet.removeClass('tweet--liked tweet--retweeted');

  tweets.prepend(newTweet);

  tweetboxField.val('');

  calculateRemainingCharacters();
};

$('.tweetbox').on('submit', function (event) {
  event.preventDefault();

  var newContent = tweetboxField.val();

  $.ajax({
    dataType: 'json', // probably not necessary
    url: '/api/tweets.php',
    method: 'POST',
    data: $('.tweetbox').serialize()
  }).then(addNewTweet);
});

var calculateRemainingCharacters = function () {
  var tweetLength = tweetboxField.val().length;

  var remainingCharacters = maxLength - tweetLength;

  tweetboxCounter.text(remainingCharacters);

  tweetboxButton
    .prop(
      'disabled', 
      remainingCharacters === maxLength ||
      remainingCharacters < 0
    );
}

tweets.on('click', '.tweet__button--like', function () {
  $(this).closest('.tweet').toggleClass('tweet--liked');
}).on('click', '.tweet__button--retweet', function () {
  $(this).closest('.tweet').toggleClass('tweet--retweeted');
});

tweetboxField.on('keyup', calculateRemainingCharacters);

calculateRemainingCharacters();

setInterval(function () {
  $.ajax({
    dataType: 'json',
    url: '/api/tweets.php'
  }).then(addNewTweet, function () {
    console.log('Oh no failure!!!')
  });
}, 5000);