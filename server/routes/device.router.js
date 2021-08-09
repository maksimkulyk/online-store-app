const Router = require("express");
const router = new Router();
const { create, getAll, getOne } = require("../controllers/device.controller");

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getOne);

module.exports = router;
