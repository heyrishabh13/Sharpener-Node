const express = require("express");
const port = 3000;

const app = express();

app.get("/welcome/:username", (req, res) => {
  const { username } = req.params;
  const { role } = req.query;
  res.send(`Welcome ${username}, your role is ${role}`);
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
