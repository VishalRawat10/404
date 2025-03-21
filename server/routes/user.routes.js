const express = require("express");
const {body} = require("express-validator");
const router = express.Router();

const userControllers = require("../controllers/user.controller");
const {authMiddleware} = require("../middlewares/authMiddlewares");

//signup
router.route("/signup").post([body("email").isEmail().withMessage("Invalid email address!"),body("fullname").isLength({min : 2}).withMessage("Fullname must be minimum 2 character long."), body("password").isLength({min : 8}).withMessage("Password must be 8 or  more length long.")], userControllers.signup);

// login 
router.route("/login").post([body("email").isEmail().withMessage("Invalid email address!"), body("password").isLength({min : 8}).withMessage("Password must be 8 or  more length long.")], userControllers.login);


//logout
router.route("/logout").post(authMiddleware, userControllers.logout);
module.exports = router;

