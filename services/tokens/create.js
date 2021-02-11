const jwt = require("jsonwebtoken");

const createToken = ({ payload, secretKey, options }) => {
	return new Promise((res, rej) => {
		jwt.sign(payload, secretKey, options, (err, token) => {
			if (err) {
				return rej(err);
			}
			return res(token);
		});
	});
};

module.exports = { createToken };
