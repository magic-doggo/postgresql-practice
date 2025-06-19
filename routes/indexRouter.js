const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    console.log("usernames will be logged here - wip")
});
module.exports = indexRouter;