import React from 'react';
import { connect } from 'react-redux';

const Button = ({ increment }) => (
  <button onClick={increment}>
    +1
  </button>
);

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({
    type: 'INCREMENT'
  })
});

export default connect(null, mapDispatchToProps)(Button);
