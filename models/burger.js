// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

const burger = {
  select: function (cb) {
    orm.select("burgers", function (results) {
      cb(results);
    });
  },
  create: function (column, values, cb) {
    orm.create("burgers", column, values, function (results) {
      cb(results);
    });
  },
  update: function (column, newVal, whereCol, whereVal, cb) {
    orm.update("burgers", column, newVal, whereCol, whereVal, function (results) {
      cb(results);
    });
  },
}


module.exports = burger;