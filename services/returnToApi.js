const returnSuccess = (res, payload) => {
	return res.json({
		success: true,
		payload,
	});
};

const returnError = (res, message) => {
	return res.status(400).json({
		success: false,
		message
	});
};

module.exports = { returnSuccess, returnError };
