const Router = require("express");
const router = new Router();
const deviceRouter = require("./device.router");
const userRouter = require("./user.router");
const brandRouter = require("./brand.router");
const typeRouter = require("./type.router");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);

module.exports = router;
