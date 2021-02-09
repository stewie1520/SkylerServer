const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
const { logger } = require("./services/logger");
require("./models/connect");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./middlewares/swagger")(app, '/docs');

app.use("/apis/v1", require("./routes/apis/v1"));
app.use("/uploads", require("./routes/upload"));

app.use((req, res) => {
	res.status(404);
	return res.render('404');
});

app.use((err, req, res) => {
	return res.status(500).send({
		success: false,
		message: (process.env.NODE_ENV === 'debug' ? err.message : 'Something broke!'),
	});
});

app.listen(3000, () => {
  logger.info(`Server is running on port ${3000}`);
});
