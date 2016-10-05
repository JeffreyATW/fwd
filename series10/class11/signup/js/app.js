$(document).foundation();

$('form').validate({
  messages: {
    username: {
      required: 'Please enter a username.'
    },
    email: {
      required: 'Please enter a valid email.',
      email: 'I\'ve seen worse emails from Wikileaks.'
    }
  },
  rules: {
    password_confirmation: {
//    equalTo: '#password-field'
      equalTo: '[name=password]'
    }
  }
});
