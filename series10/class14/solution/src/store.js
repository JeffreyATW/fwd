import { createStore } from 'redux';

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
}

export default createStore(reducer, initialState);
