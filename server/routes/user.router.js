const Router = require("express");
const router = new Router();
const {
  registration,
  login,
  check,
} = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/registration", registration);
router.post("/login", login);
router.get("/auth", authMiddleware, check);

module.exports = router;
