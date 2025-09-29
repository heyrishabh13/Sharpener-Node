const { get } = require("../routes/users");

const getUsers = (req, res) => {
  res.send(`Fetching all users`);
};

const postUsers = (req, res) => {
  res.send(`Adding a new user`);
};

const getSingleUser = (req, res) => {
  const id = req.params.id;
  res.send(`Fetching user with ID: ${id}`);
};

module.exports = {
  getUsers,
  postUsers,
  getSingleUser,
};
