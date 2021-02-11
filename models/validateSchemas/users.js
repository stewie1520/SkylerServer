module.exports = {
	type: "object",
	properties: {
		fullName: {
			type: "string",
			minLength: 1,
		},
		email: {
			type: "string",
			format: "email",
		},
		phoneNumber: {
			type: "string",
		},
		password: {
			type: "string",
			minLength: 6,
			maxLength: 200,
		},
	},
	required: ["fullName", "email", "password"]
};
