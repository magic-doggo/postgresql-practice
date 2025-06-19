const { Router } = require("express");
const newRouter = Router();
const usersController = require("../controllers/userController")

newRouter.get("/", usersController.newFormGet);
newRouter.post("/", (req, res) => {
    console.log("username to be saved: ", req.body.username);
});

module.exports = newRouter;