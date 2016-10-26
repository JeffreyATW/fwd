import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  static propTypes = {
    addTweet: PropTypes.func.isRequired
  }

  static characterLimit = 140;

  constructor(props) {
    super(props);

    this.state = {
      tweetboxValue: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTweet(this.state.tweetboxValue);
    this.setState({
      tweetboxValue: ''
    });
  }

  setTweetboxValue = event => {
    this.setState({
      tweetboxValue: event.target.value
    });
  }

  formValid = () => {
    const { tweetboxValue } = this.state;
    return (
      tweetboxValue.length !== 0 &&
      tweetboxValue.length <= Form.characterLimit
    );
  }

  render() {
    const { tweetboxValue } = this.state;
    // const tweetboxValue = this.state.tweetboxValue;

    return (
      <form className="tweetbox" onSubmit={this.handleSubmit}>
        <textarea
          value={tweetboxValue}
          onChange={this.setTweetboxValue}
          name="tweet_content"
          className="tweetbox__field"
          placeholder="Compose new Tweet..."
        />
        <div className="tweetbox__actions">
          <div className="tweetbox__counter">
            {Form.characterLimit - tweetboxValue.length}
          </div>
          {/* this.formValid() && <div>this form is valid!</div> */}
          <input
            className="tweetbox__button"
            disabled={this.formValid() ? '' : 'disabled'}
            type="submit"
            value="Tweet"
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTweet: text => dispatch({
    type: 'ADD_TWEET',
    text
  })
});

export default connect(null, mapDispatchToProps)(Form);
