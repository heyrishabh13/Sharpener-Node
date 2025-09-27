const express = require("express");
const orderRouter = require("./routes/order");
const userRouter = require("./routes/user");

const app = express();

app.use("/order", orderRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log(`Server is listening on http://localhost:3000`);
});
