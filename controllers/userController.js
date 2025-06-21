// exports.newFormGet = (req, res) => {
//   res.render("new", {
//     title: "New Form",
//   });
// };
const { query } = require("../db/pool");
const db = require("../db/queries");

async function getUsernames(req, res) {
  let usernames;
  if (req.query.search === undefined) {
    usernames = await db.getAllUsernames();
  } else {
    const param = "%" + req.query.search + "%";
    console.log(param);
    usernames = await db.getSpecificUsernames(param)
  }
  res.render("index", {
    title: "index",
    users: usernames.map(user => user.username).join(", "),
  })
}

async function newFormGet(req, res) {
  res.render("new", {
    title: "New Form",
  });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  newFormGet,
  createUsernamePost,
};