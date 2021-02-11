const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");
const ajv = new Ajv();
const { INVALID_BODY_REQUEST } = require("services/apiCodes");

addFormats(ajv);

const validateBody = schema => (req, res, next) => {
	const { body } = req;	
	const validator = ajv.compile(schema);
	const isBodyValid = validator(body);

	if (!isBodyValid) {		
		return res.status(406).json({
			success: false,
			message: "Invalid data",
			code: INVALID_BODY_REQUEST,
			detailError: {
				data: validator.errors.map(e => `${e.dataPath} ${e.message}`),
			}
		});
	}

	return next();
};

module.exports = { validateBody };