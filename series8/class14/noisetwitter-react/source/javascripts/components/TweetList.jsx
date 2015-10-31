var TweetList = React.createClass({
  render: function () {
    var tweets = this.props.tweets.map(function (data, i) {
      var boundFavorite = function () {
        this.props.favorite(i);
      }.bind(this);
      var boundRetweet = function () {
        this.props.retweet(i);
      }.bind(this);
      return (
        <Tweet data={data} key={i} favorite={boundFavorite} retweet={boundRetweet} />
      );
    }.bind(this));
    return (
      <section className="tweets">
        {tweets}
      </section>
    );
  },
})