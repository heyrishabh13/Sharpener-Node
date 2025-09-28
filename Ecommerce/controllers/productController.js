const getProducts = (req, res) => {
  res.send("Fetching all products");
};

const postProduct = (req, res) => {
  res.send("Adding a new product");
};

const getSingleProduct = (req, res) => {
  const id = req.params.id;
  res.send(`Fetching product with ID: ${id}`);
};

module.exports = {
  getProducts,
  getSingleProduct,
  postProduct,
};
