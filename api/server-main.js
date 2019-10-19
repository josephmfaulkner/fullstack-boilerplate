'use strict';
const config = require('./config');
const express = require('express');

// Constants
const PORT = config.PORT;
const HOST = config.HOST;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
