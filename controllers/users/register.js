const { register } = require("packages/users/register");
const { returnSuccess, returnError } = require("services/returnToApi");

const registerController = async (req, res) => {
  const { success, payload, message } = await register({ body: req.body });

  if (success) {
    return returnSuccess(res, payload);
  }

  return returnError(res, message);
};

module.exports = { registerController };
