const Router = require("express");
const router = new Router();
const { create, getAll, getOne } = require("../controllers/device.controller");
const checkRole = require("../middleware/checkRole.middleware");

router.post("/", checkRole("ADMIN"), create);
router.get("/", getAll);
router.get("/:id", getOne);

module.exports = router;
