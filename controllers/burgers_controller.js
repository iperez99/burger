var express = require("express");
var router = express.Router();


router.get("/", function(req, res) {
    // burger.selectAll(function(data) {
    //   var hdbrsObj = {
    //     burgers: data
    //   };
    //   console.log(hdbrsObj);
      res.render("index")
    });

module.exports = router;