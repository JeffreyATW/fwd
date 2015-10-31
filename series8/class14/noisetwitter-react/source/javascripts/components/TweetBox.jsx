var TweetBox = React.createClass({
  getInitialState: function () {
    return {newTweet: ''};
  },
  handleChange: function (event) {
    this.setState({newTweet: event.target.value});
  },
  handleSubmit: function (event) {
    event.preventDefault();
    this.props.addNewTweet(this.state.newTweet);
    this.setState({newTweet: ''});
  },
  render: function () {
    return (
      <form method="post" className="tweetbox cf" onSubmit={this.handleSubmit}>
        <textarea name="tweet_content" className="tweetbox__field" placeholder="Compose new Tweet..." value={this.state.newTweet} onChange={this.handleChange}></textarea>
        <input className="tweetbox__button" type="submit" value="Tweet" disabled={ this.state.newTweet.length > 140 || this.state.newTweet.length === 0 ? 'disabled' : false} />
        <div className="tweetbox__counter">{ 140 - this.state.newTweet.length }</div>
      </form>
    );
  },
})