## Front-end Web Development

# Assignment for Week 5

1.  Create an HTML file (a blank file with a `.html` extension).
2.  Create a JS file (a blank file with a `.js` extension).
3.  Add a `<script>` element to the HTML file. Set its `src` attribute to the name of your JS file.
4.  In the JS file, declare a variable called `createName` and assign a function to it:
    1.  The function should accept two arguments, `first` and `last`.
    2.  It should return a string which is the concatenation of `first`, a space, and `last`.
5.  Declare another variable called `askName` and assign another function to it. Within the function:
    1.  Declare a variable called `first`, and assign to it the output of the `prompt` DOM function call, which should ask for your first name.
    2.  Declare a variable called `last`, and assign to it the output of another `prompt` call, which should ask for your last name.
    3.  Declare a variable called `fullName`, and assign to it the output of the `createName` function we created above, passing in the `first` and `last` variables.
    4.  Call the `alert` DOM function, making use of the `fullName` variable to tell the user what their full name is, e.g. "Your name is John Smith!".
    5.  No `return` command necessary.
6.  Call the `askName` function.

## Extra credit:

*   Modify `askName` to keep asking for your name until your full name is Bob Jones.

## More extra credit:

*   In the HTML file, add a `<p>` tag with an `id` attribute of `"asker"`, and put some text in the element.
*   Add a line to the JS file that calls the `document.getElementById` function with `"asker"` as its argument. Assign the output of this function call to a variable called `asker`.
*   `asker` will be an object. Assign the `askName` variable to the `onclick` property of `asker`.
*   If all goes well, clicking on the paragraph on your page should pop up first/last name prompts.

* * *

[Solution](http://jeffreyatw.github.io/fwd/series10/class5/solution/)