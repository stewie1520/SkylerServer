const { createLogs } = require("../../packages/logs/create");
const { returnSuccess, returnError } = require("../../services/returnToApi");

const createLogsController = async (req, res) => {
  const { success, payload, message } = await createLogs({
    body: req.body,
    ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
  });

  if (success) {
    return returnSuccess(res, payload);
  }

  return returnError(res, message);
};

module.exports = { createLogsController };
