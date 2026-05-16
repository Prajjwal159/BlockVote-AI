const Vote = require("../models/Vote");

const Election = require("../models/Election");
const contract = require("../blockchain/blockchain");



// CAST VOTE
exports.castVote = async (req, res) => {

    try {

        const { electionId, candidateIndex } = req.body;

        const userId = req.user.id;

        // Check election exists
        const election = await Election.findById(electionId);

        if (!election) {

            return res.status(404).json({
                message: "Election not found"
            });

        }

        // Check election active
        if (!election.isActive) {

            return res.status(400).json({
                message: "Election is not active"
            });

        }

        // Check date validity
        const now = new Date();

        if (
            now < election.startDate ||
            now > election.endDate
        ) {

            return res.status(400).json({
                message: "Voting is closed"
            });

        }

        // Prevent duplicate voting
        const alreadyVoted = await Vote.findOne({
            voter: userId,
            election: electionId
        });

        if (alreadyVoted) {

            return res.status(400).json({
                message: "You already voted"
            });

        }

        // Check candidate exists
        if (
            candidateIndex < 0 ||
            candidateIndex >= election.candidates.length
        ) {

            return res.status(400).json({
                message: "Invalid candidate"
            });

        }

        // Store vote
        await Vote.create({
            voter: userId,
            election: electionId,
            candidateIndex
        });

        await contract.castVote(
            1,
            candidateIndex
        );

        // Increase candidate vote count
        election.candidates[candidateIndex].votes += 1;

        await election.save();

        res.status(200).json({
            message: "Vote cast successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};