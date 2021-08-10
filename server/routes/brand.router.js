const Router = require("express");
const router = new Router();
const { create, getAll } = require("../controllers/brand.controller");
const checkRole = require("../middleware/checkRole.middleware");

router.post("/", checkRole("ADMIN"), create);
router.get("/", getAll);

module.exports = router;
