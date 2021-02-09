const mongoose = require("mongoose");

const keylogSchema = new mongoose.Schema({
	ip: {
		type: String,
		required: true,
	},
	keyPressed: [{
		type: String,
	}],
}, {
	timestamps: true
});

module.exports = mongoose.model("keylogs", keylogSchema);
