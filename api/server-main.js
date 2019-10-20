'use strict';
const config = require('./config');
const express = require('express');

// Constants
const PORT = config.PORT;
const HOST = config.HOST;

// App
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  console.log('Get Posts');
  res.json({
    posts: [
      {
        title: 'PDF Document'
      },
      {
        title: 'Family Photo'
      },
      {
        title: 'Shopping List'
      },
      {
        title: 'Train Tickets'
      },
      {
        title: 'Expense Report'
      },
      {
        title: 'Cover Letter'
      },
      {
        title: 'Transcript'
      },
      {
        title: 'Album Script'
      }
    ]
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
