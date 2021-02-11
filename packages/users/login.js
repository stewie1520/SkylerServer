const { logger } = require("services/logger");
const Users = require("models/schemas/users");
const { createToken } = require("services/tokens/create");
const { getData } = require("./util/getData");

const login = async ({ email, password }) => {
	try {
		const user = await Users.findOne({ email });
		if (!user || !await user.checkForPassword(password)) {
			return {
				success: false,
				message: "Username or password is incorrect"
			};
		}

		const payload = getData(user);
		const [accessToken, refreshToken] = await Promise.all([
			createToken({
				payload,
				secretKey: process.env.SECRET_PASSWORD_HASH,
				options: {
					expiresIn: '15 minutes',
				},
			}),
			createToken({
				payload: { _id: user._id },
				secretKey: process.env.SECRET_PASSWORD_HASH,
				options: {
					expiresIn: '30 days',
				},
			}),
		]);

		return {
			success: true,
			payload: {
				accessToken,
				refreshToken,
			},
		};
	} catch (err) {
		logger.error(err);
		return {
			success: false,
			message: err.message
		};
	}
};

module.exports = { login };
