const { returnSuccess, returnError } = require("services/returnToApi");
const { getPresignedUrl } = require("packages/upload/getPresignedUrl");

const getPresignedUrlController = async (req, res) => {
	const { success, payload, message } = await getPresignedUrl({
		filename: req.body.filename,
		filetype: req.body.filetype,
	});

	if (!success) {
		return returnError(res, message);
	}

	return returnSuccess(res, payload);
};

module.exports = { getPresignedUrlController };
