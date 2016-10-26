import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';

const App = ({ count }) => (
  <div>
    {count}
    <Button />
  </div>
);

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(App);
