const commentsService = require("../services/comments");

function addCommentsRoutes(app) {
  app.post("/addComments", async (req, res) => {
    try {
      let resulte = await commentsService.addComment(req.body);
      return res.json(resulte);
    } catch (err) {
      res.sendStatus(500);
    }
  }),
    app.post("/getComments", async (req, res) => {
      try {
        let comments = await commentsService.getComments(req.body.email);
        return res.json(comments);
      } catch (err) {
        res.sendStatus(500);
      }
    });
}

module.exports = addCommentsRoutes;
