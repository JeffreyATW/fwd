## Front-end Web Development
# Assignment for Week 15

A designer has given you a mockup and assets, and wants you to write the HTML and CSS:

*   [Mockup](http://jeffreyatw.github.io/fwd/series10/class15/assignment/mockup.png)
*   [Advertisement](http://jeffreyatw.github.io/fwd/series10/class15/assignment/ad.gif)
*   [Photo of Curly](http://jeffreyatw.github.io/fwd/series10/class15/assignment/curly.jpg)
*   [Photo of Larry](http://jeffreyatw.github.io/fwd/series10/class15/assignment/larry.jpg)
*   [Photo of Moe](http://jeffreyatw.github.io/fwd/series10/class15/assignment/moe.jpg)

Here are some tips for putting the site together:

*   The three main sections need to be floated.
*   The background color behind both sidebars, and the background of the page, are detailed in the mockup.
*   You'll need to apply `10px` padding to each section, which means you should add a rule that applies `box-sizing: border-box` to all elements in order for the width to be set properly.
*   The images of the Three Stooges can be put inside `<figure>` elements, for semantic reasons, and also because it provides some default margin, and a place to add a class that will float each Stooge to the left or right.
*   Each Stooge `<figure>` should have an appropriate class name.
*   You can get three paragraphs of dummy text from the [Lorem Ipsum generator](http://lipsum.com/feed/html). Make sure to surround each one in `<p>` tags.
*   You'll need to surround the three sections in a container element to achieve the darker background color. Since floated sections don't add height to their containers, you'll need to add a clearfix hack. Google "micro clearfix hack" and copy the CSS from the first result into your stylesheet. You can then apply the `cf` class to the container.
*   The element containing the three main sections also needs to be centered. You can do this by applying a `margin` of `0 auto` to it, and setting its width to the grand total width of all three sections plus their padding.
*   Remember to get rid of the default spacing that's added to the `<body>` element - if it's not already the element that contains the sections.
*   If `<body>` _is_ the section container, what can you style to make the area outside of it a different color?

## Extra credit

*  Make a flexbox version of the columns. You might find that it's impossible to recreate the text wrapping around the images using flexbox.

* * *

[Solution](http://jeffreyatw.github.io/fwd/series10/class15/solution/)