var express = require("express");
var router = express.Router();
// Import the model to use its database functions.
var burger = require("../models/burger.js")
// Routes//

//GET -find all route- //
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POST route - create a burger //
router.post("/api/burger", function (req, res) {
  var newBurger = req.body.name;

  burger.create("burger_name", newBurger, function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
});

// PUT route - update the db //
router.put("/api/burger/:id", function (req, res) {
  var status = Boolean(req.body.devoured);

  burger.update("devoured", status, "id", req.params.id, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});


module.exports = router;