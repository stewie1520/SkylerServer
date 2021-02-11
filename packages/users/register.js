const { pick } = require("lodash");
const { logger } = require("services/logger");
const User = require("models/schemas/users");
const { getData } = require("./util/getData");
const { hashPassword } = require("services/hashPassword");

const register = async ({ body }) => {
	try {
		const { email, password } = body;
		const countUser = await User.count({ email });

		if (countUser) {
			return {
				success: false,
				message: `User with email ${email} has already exists. Please try other email`,
			};
		}
		const hashedPassword = await hashPassword(password);
		console.log(hashedPassword);
		const user = await User.create({
			...pick(body, [
				"email",
				"fullName",
				"phoneNumber",
			]),
			password: hashedPassword,
		});

		return {
			success: true,
			payload: getData(user),
		};
	} catch (err) {
		logger.error(err);
		return {
			success: false,
			message: err.message,
		};
	}
};

module.exports = { register };
