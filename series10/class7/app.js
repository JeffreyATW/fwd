var form = $('form');
var textarea = $('textarea');
var characterLimit = 140;

form.on('submit', function (event) {
  event.preventDefault();

  var newTweetValue = textarea.val();

  var newTweet = $('.tweet').first().clone();

  newTweet.removeClass('retweeted liked');

  newTweet.find('.tweet__time').text('now');
  newTweet.find('.tweet__content').text(newTweetValue);

  textarea.val('');

  $('.tweets').prepend(newTweet);
});

var calculateRemainingCharacters = function () {
  var textareaValue = textarea.val();

  var remainingCharacters = characterLimit - textareaValue.length;

  $('.tweetbox__counter').text(remainingCharacters);

  $('.tweetbox__button').prop('disabled', remainingCharacters < 0 || remainingCharacters === characterLimit);
};

textarea.on('keyup', calculateRemainingCharacters);

calculateRemainingCharacters();

$('.tweets').on('click', '.retweet', function () {
  $(this).closest('.tweet').toggleClass('retweeted');
});

$('.tweets').on('click', '.like', function () {
  $(this).closest('.tweet').toggleClass('liked');
});
