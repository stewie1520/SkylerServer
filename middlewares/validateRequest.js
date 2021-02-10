const createError = require('http-errors');
const { get, isEmpty } = require('lodash');

const validateRequest = async (req, res, next) => {
	const token = req.headers.authorization;
	if (isEmpty(token)) {
		return next(createError(401, "You are not allowed"));
	}

	return next();
};

module.exports = { validateRequest };