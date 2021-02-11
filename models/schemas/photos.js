const mongoose = require("mongoose");

const photosSchema = new mongosoe.Schema({
	url: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
		enum: [
			"user",
		]
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		index: true,
		ref: "users"
	},
}, {
	timestamp: true
});

module.exports = mongoose.model("photos", photosSchema);
