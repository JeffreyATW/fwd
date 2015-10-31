var NoiseTwitter = React.createClass({
  getInitialState: function () {
    return {
      data: [
        {
          author: 'JeffreyATW',
          time: '1h',
          content: 'You give love a bad name.'
        },
        {
          author: 'JeffreyATW',
          time: '2h',
          content: 'Old McDonald had a farm.'
        },
        {
          author: 'JeffreyATW',
          time: '3h',
          content: "I'm a little teapot, short and stout."
        }
      ]
    };
  },
  render: function () {
    return (
      <div>
        <TweetBox addNewTweet={this.addNewTweet} />
        <TweetList tweets={this.state.data} retweet={this.retweet} favorite={this.favorite} />
      </div>
    );
  },
  addNewTweet: function (newTweet) {
    this.state.data.unshift({
      author: 'JeffreyATW',
      time: 'now',
      content: newTweet
    });
    this.setState(this.state);
  },
  retweet: function (i) {
    var tweet = this.state.data[i];
    tweet.retweeted = !tweet.retweeted;
    this.setState(this.state);
  },
  favorite: function (i) {
    var tweet = this.state.data[i];
    tweet.favorited = !tweet.favorited;
    this.setState(this.state);
  },
})