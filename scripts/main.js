const Twitter = require('twitter');
const credentials = require('../.private/credentials.js');
const client = new Twitter(credentials);
const tweetList = document.getElementById('tweet-list');
const startButton = document.getElementById('start-button');
let stream;

startButton.addEventListener('click', () => {
  if (!stream) {
    stream = client.stream('statuses/filter', {track: 'javascript'});
    stream.on('data', (tweet) => {
      const li = document.createElement('li');
      li.textContent = tweet.text;
      tweetList.appendChild(li);
    });
    stream.on('error', (error) => {
      console.log(error);
    });
  }
});