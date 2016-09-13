## Front-end Web Development
# Assignment for Week 8

1.  In your terminal, use `foundation new` to create a new **website**, `week-8`, with a **Basic Template**.
2.  `cd` into `week-8` and run `foundation watch`.
3.  Open the `week-8` folder in your file manager (Finder, Explorer, etc.)
4.  Edit `index.html` and remove everything, except for the `script` elements, inside the `<body>` element.
5.  Go to the [Foundation for Sites documentation](http://foundation.zurb.com/sites/docs/) and copy and paste the following into the `<body>` element before the `script` elements:
  1. A basic **Top Bar**
  2. A basic **Callout**
  3. A **Grid** - a single `row` which contains two `columns` that split the grid in half at any window width.
  4. A basic modal (**Reveal**) - we'll add a button to open it in a few steps.
6.  Replace the heading in the callout with an `<h1>`.
7.  Add a rule to the bottom of `scss/app.scss` that changes the `font-family` of `h1` to `'Comic Sans MS'`.
8.  In the first column of the grid, insert a `<button>` with a class of `button` and inner text of `Open Modal`.
9.  Add a `data-open` attribute to the button with the ID of the modal as its value. Clicking the button should open the modal.
10.  In the second column of the grid, add a paragraph with the text `I'm testing out Foundation!`.
11.  Surround the word "`Foundation`" in a basic **Tooltip** `span`. Change the value of the `title` attribute to `"A front-end framework."`.
12.  Open `index.html` in your browser to see your page. If the headings in the callout and modal aren't in Comic Sans MS, make sure you're still running `foundation watch` in your terminal.

## Extra credit

1. Put the callout inside a column of no specific width, inside a new row.
2. Go into `_settings.scss` and change the `$callout-margin` to `1rem 0`.

* * *

[Solution](solution/)
