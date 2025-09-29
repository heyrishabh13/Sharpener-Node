const getProductControllerData = () => {
  return "Fetching all products";
};

const postProductControllerData = () => {
  return "Adding a new product";
};

const getSingleProductControllerData = (id) => {
  return `Fetching product with ID: ${id}`;
};

module.exports = {
  getProductControllerData,
  postProductControllerData,
  getSingleProductControllerData,
};
