import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  addTweet = text => {
    this.setState({
      tweets: [{
        content: text,
        author: 'JeffreyATW',
        avatar: 'avatar.jpg',
        time: 'now',
        id: this.state.tweets[0].id + 1
      },
      ...this.state.tweets]
    });
  }

  render() {
    return (
      <div>
        <Form addTweet={this.addTweet} />
        <section className="tweets">
          {this.state.tweets.map(tweet => (
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
      </div>
    );
  }
}

export default App;
