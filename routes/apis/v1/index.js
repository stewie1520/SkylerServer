const router = require("express").Router();

router.use("/logs", require("./logs"));
router.use("/users", require("./users"));

module.exports = router;
