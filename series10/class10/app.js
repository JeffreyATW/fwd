var form = $('form');
var textarea = $('textarea');
var characterLimit = 140;

var addTweet = function (response) {
    var newTweet = $('.tweet').first().clone();

    newTweet.removeClass('retweeted liked');

    newTweet.find('.tweet__time').text('now');
    newTweet.find('.tweet__content').text(response.tweet_content);
    newTweet.find('.tweet__avatar img').prop('src', response.tweet_avatar);
    newTweet.find('.tweet__author').text(response.tweet_author);

    $('.tweets').prepend(newTweet);
}

form.on('submit', function (event) {
  event.preventDefault();

  $.ajax({
    url: 'tweet.php',
    method: 'POST',
    data: form.serialize()
  }).then(function (response) {
    addTweet(response);

    textarea.val('');
  }).fail(function () {
    alert('that didn\'t work, ya dingus!');
  });
});

setInterval(function () {
  $.ajax('tweet.php').then(addTweet);
}, 5000);

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
