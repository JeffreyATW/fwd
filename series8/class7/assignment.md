## Front-end Web Development
# Assignment for Week 7

1.  Make a copy of the `series8/class7/assignment` folder from [this repository](https://github.com/JeffreyATW/fwd).
2.  Download the latest version of jQuery and include a `<script>` reference in the HTML file to it.
3.  Create a JS file of your own and include a `<script>` reference to it in the HTML file.
4.  In the JS file, add behavior that makes it so the number inside the `button` element increments by 1 when the `click` event occurs on it.
5.  Furthermore, make the `button` element change its `class` attribute when clicked. If the class is `zero`, change it to `one`. If `one`, then `two`. If `two`, then `three`, and then back to `zero` again.

## Hints

*   Here are the jQuery functions you should use:
    *   `$`
    *   `.on`
    *   `.text`
    *   `.prop`
    Read up on the [jQuery API Documentation](http://api.jquery.com/) to learn how to use these methods.
*   You should use the special `this` variable to refer to the element that was clicked. You'll have to pass it into a jQuery call, and reference it more than once. You might consider storing the jQuery-wrapped element in a new variable (I called mine `$this`) so you don't have to pass it into jQuery multiple times.
*   You should store a variable that counts the number of times the `button` element was clicked. That's the easiest way to set the new text inside the `button` element.
*   Another good use for this counter is determining what class you should set. There is a handy modulo operator (`%`) that you can use that will provide the remainder of the current counter value if you divide it by four - this will give you either `0`, `1`, `2`, or `3`, which conveniently maps to the class names you're supposed to apply. For example, `4 % 4 === 0`, or `7 % 4 === 3`.

* * *

[Solution](http://jeffreyatw.github.io/fwd-assignments/series8/class7/solution/)