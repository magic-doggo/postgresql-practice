const { Router } = require("express");
const deleteRouter = Router();
const usersController = require("../controllers/userController");

deleteRouter.get("/", usersController.deleteAllUsers);

module.exports = deleteRouter;