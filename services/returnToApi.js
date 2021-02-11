const { BAD_REQUEST, API_SUCCESS } = require("./apiCodes");

const returnSuccess = (res, payload) => {
	return res.json({
		success: true,
		payload,
		code: API_SUCCESS,
	});
};

const returnError = (res, message, code = BAD_REQUEST ) => {
	return res.status(400).json({
		success: false,
		message,
		code,
	});
};

module.exports = { returnSuccess, returnError };
