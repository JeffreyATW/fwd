import { createStore } from 'redux';

const initialState = {
  tweets: [
    {
      id: 2,
      content: 'You give love a bad name.',
      author: 'JeffreyATW',
      avatar: 'avatar.jpg',
      time: '1h'
    },
    {
      id: 1,
      content: 'Old McDonald had a farm.',
      author: 'JeffreyATW',
      avatar: 'avatar.jpg',
      time: '2h'
    },
    {
      id: 0,
      content: 'I\'m a little teapot, short and stout.',
      author: 'JeffreyATW',
      avatar: 'avatar.jpg',
      time: '3h'
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        tweets: [{
          content: action.text,
          author: 'JeffreyATW',
          avatar: 'avatar.jpg',
          time: 'now',
          id: state.tweets[0].id + 1
        },
        ...state.tweets]
      };
    default:
      return state;
  }
};

export default createStore(reducer, initialState);
