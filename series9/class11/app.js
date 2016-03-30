$('form').validate({
  errorPlacement: function (error, element) {
    element.closest('.form-group').addClass('has-error');
    element.after(error);
  },
  rules: {
    passwordConfirmation: {
      equalTo: '#exampleInputPassword1'
    }
  },
  messages: {
    passwordConfirmation: {
      equalTo: 'Looks like you made a typo!',
      required: 'You need to enter the password again!@!!'
    }
  }
});