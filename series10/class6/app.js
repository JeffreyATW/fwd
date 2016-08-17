var form = $('form');
var textarea = $('textarea');

form.on('submit', function (event) {
  event.preventDefault();

  var newTweetValue = textarea.val();

  var newTweet = $('.tweet').first().clone();

  newTweet.find('.tweet__time').text('now');
  newTweet.find('.tweet__content').text(newTweetValue);

  textarea.val('');

  $('.tweets').prepend(newTweet);
});
