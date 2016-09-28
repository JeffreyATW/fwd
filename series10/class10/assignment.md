## Front-end Web Development
# Assignment for Week 10

1.  Create and enter a folder called `colors`.
2.  Create a folder inside the `colors` folder, called `api`.
3.  In the `api` folder, create three files called `blue.json`, `red.json`, and `green.json`. In each file, insert this text:

    ```json
    {"color":"VALUE"}
    ```
    
    Where `VALUE` is `blue`, `red`, or `green`, depending on the filename.
4.  Create an `index.html` file in `colors`.
5.  Add three `<button>` elements to `index.html`, giving them, respectively, both `class`es and inner text of `"blue"`, `"red"`, and `"green"`.
6.  Download the latest version of jQuery into the `colors` folder and include it in `index.html`.
7.  Create a file called `app.js` and include it into `index.html`.
7.  Add behavior that makes clicking the `button`s make an Ajax GET call, where the URL is the path to the JSON file whose name corresponds with the button (include `api` as part of the path). If the Ajax call is successful, take the `response.color` value and apply it as the `background` CSS property to the `body` of the page. jQuery functions you should use:
    *   `$`
    *   `.on`
    *   `$.ajax`
    *   `.then`
    *   `.css` (you will have to learn how to use this)
    
    Since these are `<button>` elements and not `<input type="submit">` inside a form, you don't need to `event.preventDefault` in your event listener, as `button`s do nothing by default.
8.  Install `pushstate-server`:

    ```shell
    npm install -g pushstate-server
    ```

9.  From within the `colors` directory, run:

    ```shell
    pushstate-server .
    ```

10. Go to [http://localhost:9000](http://localhost:9000) and test out the buttons.

## Extra credit:

*   Simplify your code (if you haven't already) so each `button` calls the same function but with a different parameter based on the `class` or inner text of the `button`. You will need this additional jQuery function:
    *   either `.prop` or `.text`

* * *

[Solution](http://jeffreyatw.github.io/fwd/series9/class10/solution/colors/)
