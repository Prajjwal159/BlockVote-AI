const express = require("express");

const router = express.Router();

const {
    castVote
} = require("../controllers/voteController");

const protect = require("../middleware/authMiddleware");



// CAST VOTE
router.post(
    "/cast",
    protect,
    castVote
);

module.exports = router;