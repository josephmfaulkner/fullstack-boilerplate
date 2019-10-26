"use strict";
import express from "express";
import { Sequelize } from "sequelize";
import config from "./config";

// Constants
const PORT = config.PORT;
const HOST = config.HOST;

const dbHost = process.env.MYSQL_HOST;
const dbPort = process.env.MYSQL_PORT;
const databaseName = process.env.MYSQL_DATABASE; 
const dbUsername = process.env.MYSQL_USER; 
const dbPassword = process.env.MYSQL_PASSWORD;

const dbConnectString = `mysql://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${databaseName}`;

const sequelize = new Sequelize(dbConnectString);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });




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
