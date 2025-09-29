const path = require("path");

const combineFormFile = () => {
  return path.join(__dirname, "..", "views", "product.html");
};

module.exports = combineFormFile;