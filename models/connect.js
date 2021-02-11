const mongoose = require("mongoose");
const { logger } = require("services/logger");

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}, () => {
	logger.info("Database connected");
});
