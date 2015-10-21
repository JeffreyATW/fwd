## Front-end Web Development
# Assignment for Week 12

1.  Make a copy of the [solution to Assignment 7](https://github.com/JeffreyATW/fwd/tree/master/series8/class7/solution).
2.  Download the latest version of [AngularJS](https://angularjs.org/) and include a `<script>` reference in the HTML file to it.
3.  Replace the existing jQuery code with Angular code.

## Hints

*   Create an Angular module. `counter` is a fine name.
*   Create a controller on the Angular module. `MainController` works.
*   Reference these names, respectively, using the `ng-app` and `ng-controller` directives on the `<body>` element.
*   Pass `$scope` into the `MainController`'s function. [Read up on Inline Array Annotation](https://docs.angularjs.org/guide/di#inline-array-annotation) if you need help.
*   Turn the existing `counter` variable into a `$scope` property.
*   Replace the `class` attribute on the `<button>` with an `ng-class` directive which applies the proper `class` based on the logic from the existing jQuery code. Remember, the value of `ng-class` should be an object containing `class` names as keys, and boolean statements as values. These boolean statements can have arithmetic in them if necessary.
*   Define a method on the `$scope` that increments `$scope.counter` when called.
*   Add an `ng-click` directive, which calls said function, to the `<button>`.
*   Change the content of the button to print out the current value of `counter`.

* * *

[Solution](http://jeffreyatw.github.io/fwd/series8/class12/solution/)
