var tweetboxField = $('.tweetbox__field');

$('.tweetbox').on('submit', function (event) {
  event.preventDefault();

  var newTweet = $('.tweet').first().clone();

  newTweet.find('.tweet__time').text('now');

  var newContent = tweetboxField.val();

  newTweet.find('.tweet__content').text(newContent);

  $('.tweets').prepend(newTweet);

  tweetboxField.val('');
});