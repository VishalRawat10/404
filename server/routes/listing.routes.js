const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const listingController = require("../controllers/listing.controller");
const {authMiddleware} = require("../middlewares/authMiddlewares");

router.route("/").get(listingController.show).post(authMiddleware, [body("title").notEmpty().withMessage("Title is required!"),body("description").notEmpty().withMessage("Description is required!"), body("image").notEmpty().withMessage("Image is required!"),body("price").notEmpty().withMessage("Price is required!"),body("category").notEmpty().withMessage("Category is required!")], listingController.create);

router.route("/:id").get(listingController.showListing);

// router.route("/:id/edit").post(authMiddleware, )

module.exports = router;