const express = require("express");
const router = express.Router();

// Controllers
const {
GiftCardSignup
} = require("../controllers/GiftCardController");

// Middlewares


// Routes
router.post("/create", GiftCardSignup );

module.exports = router;
