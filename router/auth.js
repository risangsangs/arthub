const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

router.get("/auth/getuser/:userId", authController.getById);

router.post("/auth/signup", authController.signup);

router.post("/auth/signin", authController.signin);

router.put("/auth/changepw/:id", authController.editPassword);

router.put("/auth/updateprofile/:userId", authController.editUser);

router.post("/auth/logout", authController.logout);

module.exports = router;
