const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.get("/:userId", cartController.getCart);

router.post("/:userId", cartController.postCart);

module.exports = router;
