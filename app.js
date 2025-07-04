const express = require("express");
require('dotenv').config()
const app = express();
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const deleteRouter = require("./routes/deleteRoute")
app.use(express.urlencoded({ extended: true }));


app.use("/", indexRouter);
app.use("/new", newRouter)
app.use("/delete", deleteRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}!`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});