const createLogs = async ({ body }) => {
	try {
		const { burglarName } = body;
		
		console.log(burglarName);
		return {
			success: true,
			payload: {},
		};
	} catch (err) {
		console.log(err.stack);
		return {
			success: false,
			message: err.message,
		};
	}
};

module.exports = { createLogs };
