const { getPresignedUrl: service } = require("services/getPresignedUrl");
const { logger } = require("services/logger");

const getPresignedUrl = async ({ filename, filetype }) => {
	try {
		const payload = await service({ filename, filetype });
		return { success: true, payload };
	} catch (err) {		
		logger.error(err);
		return {
			success: false,
			message: err.message
		};
	}
};

module.exports = { getPresignedUrl };
