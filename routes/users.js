const express = require("express");

const router = express.Router();

router.get("/register", function (req, res) {
  res.send("Hello World");
});
router.get("/login", function (req, res) {
  res.send("Hello World");
});

module.exports = router;
