const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "product.html"));
});

router.post("/", (req, res) => {
  const obj = req.body;
  res.json({ value: obj.productName });
});

module.exports = router;
