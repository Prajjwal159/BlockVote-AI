const express = require("express");

const router = express.Router();

const {
    createElection,
    getAllElections
} = require("../controllers/electionController");

const protect = require("../middleware/authMiddleware");

const adminOnly = require("../middleware/adminMiddleware");



// CREATE ELECTION
router.post(
    "/create",
    protect,
    adminOnly,
    createElection
);



// GET ALL ELECTIONS
router.get("/", getAllElections);

module.exports = router;