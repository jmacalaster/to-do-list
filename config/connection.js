// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    user: process.env.JAWSDB_USER,
    password: process.env.JAWSDB_PASS,
    database: process.env.JAWSDB_BASE,
    host: process.env.JAWSDB_HOST,
    port: process.env.JAWSDB_PORT
  });  
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.dbPassword,
    database: "todolist_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
