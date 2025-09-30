const productService = require("../Services/productService");
const { sendResponse, sendErrorResponse } = require("../utils/response");

const getProducts = (req, res) => {
  // res.send(productService.getProductControllerData());
  return sendResponse(res, "Fetching all products", 200);
};

const postProduct = (req, res) => {
  // res.send(productService.postProductControllerData());
  return sendResponse(res, "Adding a new product", 201);
};

const getSingleProduct = (req, res) => {
  const id = req.params.id;
  try {
    if (id > 10) {
      let err = new Error(`No Product with Id: ${id}`);
      err.statusCode = 404;
      throw err;
    }
    // res.send(productService.getSingleProductControllerData(id));
    return sendResponse(res, `Fetching product with ID: ${id}`, 200);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  postProduct,
};
