## Front-end Web Development
# Assignment for Week 14

1.  Do [assignment 13](https://github.com/JeffreyATW/fwd/blob/master/series10/class14/assignment.md) (or use the solution).
2.  Install (and save) Redux and React Redux.
3.  Create a file in `src`, `store.js`, with the result of calling `createStore` as the default export.
4.  Add the initial state to `store.js` (copy it from the state of `App.js`).
5.  Add a reducer function. In the case of the action's `type` being `'INCREMENT'`, return a new state with the existing count incremented by one. In all other cases, return the existing state.
6.  Pass the reducer and initial state into the `createStore` call.
7.  In `index.js`, import `store`, surround the `<App />` with a `Provider` component with `store` passed into it as the `store` prop.
8.  In `App.js`, decorate the default export with a `connect()` call.
9.  Create a `mapStateToProps` function that takes the state and returns an object containing the current count, and pass the function into `connect`.
10. You can now turn `App` into a pure component (a function), which takes `count` from the props object passed into it and returns the `<div>` and its children. You no longer have to pass `this.increment` down to `Button`.
11. In `Button.js`, decorate the default export with a `connect()` call.
12. Create a `mapDispatchToProps` function that takes the `dispatch` function and returns an object containing a function called `increment`.
13. `increment` should return an object containing a `type` of `'INCREMENT'`.
14. Pass `mapDispatchToProps` as the second argument of `connect` (you can pass `null` for the first argument).
15. You can now turn `Button` into a pure component which takes `increment` from the props object passed into it and returns the `<button>`.

## Hints

* If you're copying the solution for assignment 13, make sure to run `npm install`.
* You'll need to import `createStore` from `'redux'`. It's a named export, not the default.
* You'll need to import `Provider` from `'react-redux`'. It's also not the default export.
* You'll need to import `connect` from `'react-redux'. Not the default export.
* If you're using arrow functions to return objects, you'll need to wrap the object in parentheses, e.g. `() => ({ foo: 'bar' })`

* * *

[Solution](https://github.com/JeffreyATW/fwd/tree/master/series10/class13/solution)
