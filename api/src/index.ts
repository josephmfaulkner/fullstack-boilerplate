"use strict";
import express from "express";
import config from "./config";

// Constants
const PORT = config.PORT;
const HOST = config.HOST;

// App
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.json({
    posts: [
      {
        title: "PDF Document"
      },
      {
        title: "Cover Letter"
      },
      {
        title: "Letter to Mother"
      }
    ]
  });
});

app.listen(PORT, HOST);
// tslint:disable-next-line:no-console
console.log(`Running on http://${HOST}:${PORT}`);
