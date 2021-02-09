const router = require("express").Router();
const multer = require("multer");
const { createLogsController } = require("controllers/logs/create");
const { showLogFormController } = require("controllers/logs/showForm");
const upload = multer({ dest: "uploads/" });

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.post("/", upload.single("burglarPhoto"), createLogsController);
router.get("/", showLogFormController);

module.exports = router;
