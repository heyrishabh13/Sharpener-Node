const express = require("express");
const studentRouter = require("./routes/students");
const coursesRouter = require("./routes/courses");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

app.use("/students", studentRouter);
app.use("/courses", coursesRouter);

app.use("*", (req, res) => {
  res.status(404).send(`Page not found`);
});

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
