const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    party: {
        type: String,
        required: true
    },

    votes: {
        type: Number,
        default: 0
    }

});



const electionSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    candidates: [candidateSchema],

    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Election", electionSchema);