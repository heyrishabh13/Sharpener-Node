const sendResponse = (res, msg, statusCode) => {
  return res.status(statusCode).send(msg);
};

const sendErrorResponse = (res, { message, statusCode }) => {
  res.status(statusCode).send(message);
};

module.exports = {
  sendResponse,
  sendErrorResponse,
};
