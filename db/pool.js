const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.user,
  database: "top_users",
  password: process.env.password,
  port: 5432 // The default port
});

//pg has 2 ways to connect to db: a client and a pool.
//client for individual connection to db, which you manually manage
//pool for pool of clients, holds onto connections, perfect for web servers
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });