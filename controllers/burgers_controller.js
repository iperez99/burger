var express = require("express");
var router = express.Router();
// Import the model to use its database functions.
var burger = require("../models/burger.js")
// Routes//

//GET -find all route- //
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});


// post route -> back to index
router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.name], function (result) {
    res.json({ id: result.insertId });
  });
})

// put route -> back to index
router.put("/api/burgers/:id", function (req, res) {
  var condition = " id = " + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;