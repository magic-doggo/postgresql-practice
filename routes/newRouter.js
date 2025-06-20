const { Router } = require("express");
const newRouter = Router();
const usersController = require("../controllers/userController")

newRouter.get("/", usersController.newFormGet);
newRouter.post("/", usersController.createUsernamePost);

module.exports = newRouter;