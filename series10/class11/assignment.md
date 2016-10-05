## Front-end Web Development
# Assignment for Week 11

[Bob's website needs some help!](assignment) He's got a bunch of jokers submitting invalid form data and cluttering up his databases. You can help!

*   Middleman is not required for this assignment.
*   You can see the passwords plain-as-day when you start typing into the fields. What can you do to those `<input>` elements to change it?
*   When you submit the form, all of the data (including the passwords) shows up in the address bar. What modification can you make to the `<form>` element to send the data slightly more covertly?
*   Bob doesn't care about whether you fill in your first or last name, but the email and passwords are required.
*   Add [jQuery Validation](http://jqueryvalidation.org) to the page. If you download it as a ZIP file, look for the JS file in the `dist` folder. You should know how to include jQuery, the jQuery Validation plugin, and your own script file by this point. Only the `$` and `.validate()` functions are necessary.
*   Make sure the form checks that the passwords match. You can use the [`equalTo`](http://jqueryvalidation.org/equalTo-method/) rule for that.

## Extra credit:

*   Use the [`errorPlacement`](http://jqueryvalidation.org/validate/) option to make the errors show up in an interesting way. `.hide()` and then `.slideDown()`, maybe?

* * *

[Solution](http://jeffreyatw.github.io/fwd/series10/class11/solution/)