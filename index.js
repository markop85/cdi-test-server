const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.json({ type: "application.json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT);

const addCommentsRoutes = require("./routes/CommentsRoutes");
addCommentsRoutes(app);

app.listen(process.env.PORT, () =>
  console.log(`server listening on port ${process.env.PORT}!`)
);
