const { pick } = require("lodash");

const getData = user => {
	return pick(user, ["fullName", "email", "numberPhone", "_id"]);
};

module.exports = { getData };
