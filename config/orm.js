// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  select: function (table, cb) {
    var query = `SELECT * FROM ??`;

    connection.query(query, [table], function (err, results) {
      if (err) {
        throw err;
      }
      console.log(`showing all the burgers`)
      console.log(results);
      cb(results);
    });
  },

  create: function (table, column, value) {
    var insertQuery = `INSERT INTO ?? (??) VALUES(?)`

    connection.query(insertQuery, [table, column, value], function (err, result) {
      if (err) {
        throw err;
      }
      console.log(`adding burger to db...`)
      console.log(result);
    });
  },

  update: function (table, column, newVal, whereCol, whereVal) {
    var updateQuery = `UPDATE ?? SET ?? = ? WHERE ?? = ?`

    connection.query(updateQuery, [table, column, newVal, whereCol, whereVal], function (err, result) {
      if (err) {
        throw err;
      }
      console.log(`updating db...`)
      console.log(result);
    });
  },

  delete: (table, column, value) => {
    var deleteQuery = `DELETE FROM ?? WHERE ?? = ?`

    connection.query(deleteQuery, [table, column, value], function (err, result) {
      if (err) {
        throw err;
      }
      console.log(`deleting burger..`)
      console.log(result);
    });
  }
}



module.exports = orm;