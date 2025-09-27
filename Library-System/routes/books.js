const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET request from /books route");
  res.send("Here is the list of books!");
});

router.post("/", (req, res) => {
  console.log("Received book data:", req.body);
  res.send("Book has been added!");
});

module.exports = router;
