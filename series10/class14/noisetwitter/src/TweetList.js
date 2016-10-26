import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const TweetList = ({ tweets }) => (
  <section className="tweets">
    {tweets.map(tweet => (
      <article className="tweet" key={tweet.id}>
        <a href={`https://twitter.com/${tweet.author}`} className="tweet__avatar">
          <img src={tweet.avatar} alt={tweet.author} />
        </a>
        <div className="tweet__details">
          <div className="tweet__metadata">
            <a href={`https://twitter.com/${tweet.author}`} className="tweet__author">{tweet.author}</a>
            <small className="tweet__time">{tweet.time}</small>
          </div>
          <p className="tweet__content">{tweet.content}</p>
          <button className="retweet">Retweet</button>
          <button className="like">Like</button>
        </div>
      </article>
    ))}
  </section>
);

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tweets: state.tweets
});

export default connect(mapStateToProps)(TweetList);
