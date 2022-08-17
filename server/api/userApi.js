const userController = require("../controllers/usersController")

module.exports = app => {
    var router = require("express").Router();
    router.get("/", userController.findAll);
    app.use('/api/users', router);
  };