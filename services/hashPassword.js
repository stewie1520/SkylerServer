const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = (rawPassword) => new Promise((res, rej) => {
	bcrypt.genSalt(saltRounds, (err, salt) => {
		if (err) {
			return rej(err);
		}
		bcrypt.hash(rawPassword, salt, (err, hash) => {
			if (err) {
				return rej(err);
			}
			return res(hash);
		});
	});
});

module.exports = { hashPassword };
