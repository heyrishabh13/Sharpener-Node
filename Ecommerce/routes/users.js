const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getUsers);

router.post("/", userController.postUsers);

router.get("/:id", userController.getSingleUser);

module.exports = router;
