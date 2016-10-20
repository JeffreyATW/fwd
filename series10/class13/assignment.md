## Front-end Web Development
# Assignment for Week 13

1.  Install `create-react-app`.
2.  Create a new app and call it whatever you want.
3.  In `App`, create a `constructor` method that initializes the component's state with `{ count: 0 }`.
4.  Replace the contents of the `render` method with a `div` containing the `count` from the state.
5.  Add a method called `increment` to the `App` component that sets the new state to contain the current count plus one.
6.  Create a new component called `Button`. It should be saved as `Button.js`.
7.  Add `Button` as a child component next to the count within `App`'s `render` call. Pass the `App` instance's `increment` method down to it as a prop called `increment`.
8.  In `Button`'s `render` method, return a `button` with an `onClick` attribute, whose value is the `increment` function from the component's props. Give the button some inner text of "+1".

## Hints

* Remember to `export default Button`.
* Also remember to `import Button from './Button'`.
* `constructor` methods need to call `super(props)`.
* Use an arrow function for `increment` to prevent weird `this` binding issues.

* * *

[Solution](http://jeffreyatw.github.io/fwd/series10/class13/solution/)
