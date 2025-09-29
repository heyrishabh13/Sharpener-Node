const express = require("express");
const productRouter = require("./routes/product");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/api/product", productRouter);

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
