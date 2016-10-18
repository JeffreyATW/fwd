import React, { Component, PropTypes } from 'react';

class Form extends Component {
  static propTypes = {
    addTweet: PropTypes.func.isRequired
  }

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

  render() {
    return (
      <form className="tweetbox" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.tweetboxValue}
          onChange={this.setTweetboxValue}
          name="tweet_content"
          className="tweetbox__field"
          placeholder="Compose new Tweet..."
        />
        <div className="tweetbox__actions">
          <div className="tweetbox__counter"></div>
          <input className="tweetbox__button" type="submit" value="Tweet" />
        </div>
      </form>
    );
  }
}

export default Form;
