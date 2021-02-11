const { returnSuccess, returnError } = require("services/returnToApi");
const { login } = require("packages/users/login");

const loginController = async (req, res) => {
	const { email, password } = req.body;
	const { success, payload, message } = await login({ email, password });

	if (!success) {
		return returnError(res, message);
	}

	return returnSuccess(res, payload);
};

module.exports = { loginController };
