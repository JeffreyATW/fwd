$(document).foundation();

$('form').validate({
  errorPlacement: function(error, element) {
    error.hide();
    error.insertAfter(element);
    error.slideDown();
  },
  rules: {
    password_confirmation: {
      equalTo: '#password'
    }
  }
});