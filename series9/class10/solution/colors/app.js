$('button').on('click', function () {
  $.ajax({
    url: 'api/' + $(this).prop('class') + '.json'
  }).then(function (response) {
    $('body').css('background', response.color);
  });
});