const express = require("express");
const userRouter = require("./routes/users");
const productRouter = require("./routes/products");
const cartRouter = require("./routes/cart");

const app = express();

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.listen(3000, () => {
  console.log(`Server is listening on http://localhost:3000`);
});
