const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.getProducts);

router.post("/", productController.postProduct);

router.get("/:id", productController.getSingleProduct);

module.exports = router;
