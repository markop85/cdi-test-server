const mongoService = require("../mongoConn");
const ObjectId = require("mongodb").ObjectId;
var sanitizeHtml = require("sanitize-html");

async function addComment(comment) {
  //sanitize HTML form
  for (let commentElm in comment) {
    comment[commentElm] = sanitizeHtml(comment[commentElm]);
  }

  comment.id = new ObjectId(comment.commenterId);
  const db = await mongoService.connectToMongo();
  const collection = db.collection("comments");
  return collection.insertOne(comment);
}

async function getComments(email) {
  //sanitize search param
  let cleanEmail = sanitizeHtml(email);
  const db = await mongoService.connectToMongo();
  const collection = db.collection("comments");
  return collection.find({ email: { $regex: cleanEmail } }).toArray();
}

module.exports = {
  addComment,
  getComments
};
