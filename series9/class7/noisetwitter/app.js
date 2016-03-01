var tweetboxField = $('.tweetbox__field');
var tweetboxCounter = $('.tweetbox__counter');
var tweetboxButton = $('.tweetbox__button');
var tweets = $('.tweets');

var maxLength = 140;

$('.tweetbox').on('submit', function (event) {
  event.preventDefault();

  var newTweet = $('.tweet').first().clone();

  newTweet.find('.tweet__time').text('now');

  var newContent = tweetboxField.val();

  newTweet.find('.tweet__content').text(newContent);

  newTweet.removeClass('tweet--liked tweet--retweeted');

  tweets.prepend(newTweet);

  tweetboxField.val('');

  calculateRemainingCharacters();
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