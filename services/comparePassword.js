const bcrypt = require("bcrypt");

const comparePassword = ({ rawPassword, hashPassword }) => {
	return bcrypt.compare(rawPassword, hashPassword);
};

module.exports = { comparePassword };
