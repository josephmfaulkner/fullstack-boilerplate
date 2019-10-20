'use strict';
const config = require('./config');
const express = require('express');

// Constants
const PORT = config.PORT;
const HOST = config.HOST;

// App
const app = express();


app.get('/', (req, res) => {
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
