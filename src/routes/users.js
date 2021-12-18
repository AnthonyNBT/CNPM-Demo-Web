const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/userController");
const { authenticated } = require("../middlewares/authentication");

router.get("/register", userController.getRegister);
router.post("/register", userController.createUser);

router.get("/login", authenticated, userController.getLogin);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logoutUser);
module.exports = router;
