"use strict";
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

async function connectToMongo() {
  const client = await MongoClient.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch(err => {
    console.log("failed to connect to mongo", err);
  });

  if (!client) {
    return;
  }
  console.log("mongo connected");
  return client.db("comments_db");
}

module.exports = {
  connectToMongo
};
