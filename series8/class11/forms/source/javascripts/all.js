//= require_tree .

$('form').validate({
  rules: {
    confirm_password: {
      equalTo: '#password'
    }
  }
});