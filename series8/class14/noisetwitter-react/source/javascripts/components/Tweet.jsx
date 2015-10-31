var Tweet = React.createClass({
  render: function () {
    var tweetClass = classNames('tweet cf', {retweeted: this.props.data.retweeted}, {favorited: this.props.data.favorited});
    var url = "http://twitter.com/" + this.props.data.author;
    return (
      <article className={tweetClass}>
        <a href={url} className="tweet__avatar">
          <img src="avatar.jpg" alt={ this.props.data.author } />
        </a>
        <div className="tweet__details">
          <small className="tweet__time">{ this.props.data.time }</small>
          <a href={url} className="tweet__author">{ this.props.data.author }</a>
          <p className="tweet__content">{ this.props.data.content }</p>
          <button className="retweet" onClick={this.props.retweet}>Retweet</button>
          <button className="favorite" onClick={this.props.favorite}>Favorite</button>
        </div>
      </article>
    );
  }
});