const productService = require("../Services/productService");

const getProducts = (req, res) => {
  res.send(productService.getProductControllerData());
};

const postProduct = (req, res) => {
  res.send(productService.postProductControllerData() );
};

const getSingleProduct = (req, res) => {
  const id = req.params.id;
  res.send(productService.getSingleProductControllerData(id));
};

module.exports = {
  getProducts,
  getSingleProduct,
  postProduct,
};
