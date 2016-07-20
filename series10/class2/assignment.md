## Front-end Web Development

# Assignment for Week 2

1.  Follow the steps in [Assignment 1](https://github.com/JeffreyATW/fwd-assignments/blob/master/series10/class1/assignment.md), up to where you link a CSS file (or use your work from last week).
2.  Duplicate the `<p>` element three times. There should be four `<p>` elements neighboring each other. You can keep the contents of the original `<p>` or change it around, but keep the `<a>` element inside them.
3.  Add a `class` attribute to the **first _and_ third** `<p>` tag, with the value `style-one`.
4.  Add a `class` attribute to the **second** `<p>` tag, with the value `style-two`.
5.  Add a `class` attribute to the **fourth** `<p>` tag, with the value `style-one style-two`.
6.  Add a `class` attribute to the **`<a>` tag within the third `<p>` element**, with the value `style-two`.
7.  In your CSS file, add a rule that sets the `color` to `green` for elements with class `style-one`.
8.  Add a rule that sets the `color` to `red` for elements with a `class` of `style-two`.
9.  Add a rule that sets the `color` to `yellow` for elements with a `class` of `style-two` that are inside elements with a `class` of `style-one`.
10.  Add a rule that sets the `color` to `blue` for elements that have both `class`es `style-one` and `style-two`.
11.  When you're done...
    *   The first paragraph should be green
    *   The second paragraph should be red
    *   The third paragraph should be green with a yellow link
    *   The fourth paragraph should be blue

## Extra credit:

*   Create a new rule that selects elements that have a `class` of `style-one`, _or_ elements that have a `class` of both `style-one` _and_ `style-two`. Add a declaration that sets their `display` to `inline`. If done properly, paragraphs three and four should appear on the same line, right next to each other.
*   Add declarations to your rule for elements with a `class` of `style-two` that sets their `margin-bottom` to `5em`, their `background` to `grey`, and their `padding` to `20px`.

* * *

[Solution](http://jeffreyatw.github.io/fwd/series10/class2/solution/)
