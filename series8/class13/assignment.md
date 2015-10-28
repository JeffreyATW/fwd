## Front-end Web Development
# Assignment for Week 13

1.  Make a copy of the [solution to Assignment 12](https://github.com/JeffreyATW/fwd/tree/master/series8/class12/solution).
2.  Go into `style.css` and remove the `position` and `margin` properties from the `button` rule.
3.  In `index.html`, surround the button in a `<script type="text/ng-template">` and give it an ID of `button.html`.
4.  Place three new elements called `<counter-button>` at the beginning of the `<body>`. They require closing tags.
5.  In `script.js`, create a new directive on the `counter` module called `counterButton`.
6.  Give the directive a scope of its own. It can be either isolated or not.
7.  Set its `templateUrl` to `'button.html'`.
8.  Restrict the directive to only apply to elements (`'E'`).
9.  Tell the directive to replace its element with its template's content.
10.  Move the `MainController`'s `counter` and `incrementCounter` properties to the directive's linking function's scope.

* * *

[Solution](http://jeffreyatw.github.io/fwd/series8/class13/solution/)
