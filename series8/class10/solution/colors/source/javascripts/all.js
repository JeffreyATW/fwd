//= require_tree .

$('button').on('click', function () {
  $.ajax('data/' + $(this).prop('class') + '.json', {
    dataType: 'json'
  }).done(function (response) {
    $('body').css('background', response.color);
  });
});