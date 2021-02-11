const mongoose = require("mongoose");
const { comparePassword } = require("services/comparePassword");

const UsersSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		index: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
	},
	isVerify: {
		type: Boolean,
		default: false,
	},
	plan: {
		type: String,
		required: true,
		enum: ["standard", "premium"],
		default: "standard"
	},
	images: [{
		type: mongoose.Schema.Types.ObjectId,
	}],
	isDeleted: {
		type: Boolean,
		default: false
	}
});

UsersSchema.method("checkForPassword", async function (rawPassword) {
	try {
		return await comparePassword({ rawPassword, hashPassword: this.password });
	} catch {
		return false;
	}
});

module.exports = mongoose.model("users", UsersSchema);
