const sessionController = require("../controllers/sessionController")
const feedbackController = require("../controllers/feedbackController")

module.exports = app => {
    var router = require("express").Router();
    router.get("/", sessionController.findAll);
    router.post("/save",(req, res)=> feedbackController.create(req,res));
    router.get("/:userId/:sessionId", sessionController.findOne);
    app.use('/api/sessions', router);
  };