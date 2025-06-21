const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getSpecificUsernames(queryParam) {
  const {rows } = await pool.query("SELECT username FROM usernames where username LIKE ($1) ", [queryParam]);
  return rows; 
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsers() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getSpecificUsernames,
  deleteAllUsers
};
