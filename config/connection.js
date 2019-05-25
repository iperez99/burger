require("dotenv").config();

// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(proccess.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: 3306,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
};

// Make connection.
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;