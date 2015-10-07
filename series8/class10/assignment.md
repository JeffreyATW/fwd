## Front-end Web Development
# Assignment for Week 14

1.  Create a new Middleman app called `colors`.
2.  Create a folder inside the `colors/source` directory called `data`.
3.  In the `data` directory, create three files called `blue.json`, `red.json`, and `green.json`. In each file, insert this text:

    ```json
    {"color":"VALUE"}
    ```a
    
    Where `VALUE` is `blue`, `red`, or `green`, depending on the filename.
3.  Add three `<button>` elements on `index.html.erb`, giving them, respectively, both `class`es and inner text of `"blue"`, `"red"`, and `"green"`.
4.  Put the latest version of jQuery into the `javascripts` directory.
5.  Move the `javascript_include_tag` line in `layouts/layout.erb` right before the ending `</body>` tag.
6.  Open `javascripts/all.js`, and keep the first commented line-as is. This line causes jQuery to automaticaly be included and downloaded.
7.  After the first line, add behavior that makes clicking the `button`s make an Ajax GET call, where the URL is the path to the JSON file whose name corresponds with the button (include `data` as part of the path). If the Ajax call is successful, take the `response.color` value and apply it as the `background` CSS property to the `body` of the page. jQuery functions you should use:
    *   `$`
    *   `.on`
    *   `$.ajax`
    *   `.done`
    *   `.css` (you will have to learn how to use this)
    Since these are `<button>` elements and not `<input type="submit">`, you don't need to `event.preventDefault` in your event listener, as `button`s do nothing by default.
7.  Run `middleman server` and test it out locally.

## Extra credit:

*   Simplify your code (if you haven't already) so each `button` calls the same function but with a different parameter based on the `class` or inner text of the `button`. You will need this additional jQuery function:
    *   either `.prop` or `.text`

* * *

[Solution](http://jeffreyatw.github.io/fwd/series8/class10/solution/colors/build/)
