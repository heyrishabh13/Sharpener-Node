const express = require("express");
const getForm = require("../controllers/productController");

const router = express.Router();

router.get("/", getForm);

module.exports = router;
