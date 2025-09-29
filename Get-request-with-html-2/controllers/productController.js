const combineFormFile = require("../Services/productService");

const getForm = (req, res) => {
  res.sendFile(combineFormFile());
};

module.exports = getForm;
