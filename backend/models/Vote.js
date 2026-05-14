const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({

    voter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    election: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Election",
        required: true
    },

    candidateIndex: {
        type: Number,
        required: true
    },

    timestamp: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Vote", voteSchema);