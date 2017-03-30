// Set up MySQL connection.
var mysql = require("mysql");
var app = require('../server');
var sequelize = require ('sequelize');

console.log('--------------the environment we are using----------------');
console.log(app.settings.env);
console.log('--------------the environment we are using----------------');

if (app.settings.env == 'development'){
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "raiders76",
  database: "burgers_db"
});
}else {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection; 