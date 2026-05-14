const Election = require("../models/Election");



// CREATE ELECTION
exports.createElection = async (req, res) => {

    try {

        const {
            title,
            description,
            candidates,
            startDate,
            endDate
        } = req.body;

        const election = await Election.create({
            title,
            description,
            candidates,
            startDate,
            endDate
        });

        res.status(201).json({
            message: "Election created",
            election
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};




// GET ALL ELECTIONS
exports.getAllElections = async (req, res) => {

    try {

        const elections = await Election.find();

        res.status(200).json(elections);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};