$('form').validate({
  rules: {
    password_confirmation: {
      equalTo: '#password'
    }
  }
});