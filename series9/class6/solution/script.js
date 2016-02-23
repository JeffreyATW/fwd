$('.add').on('click', function () {
  var newItem = $('.to-do-list li').first().clone();
  newItem.text($('.new-field').val());
  $('.to-do-list').append(newItem);
});