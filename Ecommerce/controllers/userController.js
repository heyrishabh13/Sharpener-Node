const sendResponse = require("../utils/response");

const getUsers = (req, res) => {
  //   res.send(`Fetching all users`);
  return sendResponse(res, `Fetching all users`, 200);
};

const postUsers = (req, res) => {
  //   res.send(`Adding a new user`);
  return sendResponse(res, `Adding a new user`, 201);
};

const getSingleUser = (req, res) => {
  const id = req.params.id;
  //   res.send(`Fetching user with ID: ${id}`);
  return sendResponse(res, `Fetching user with ID: ${id}`, 200);
};

module.exports = {
  getUsers,
  postUsers,
  getSingleUser,
};
