const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    userId: {
        type: Object,
        required: true,
    },
    voted: {
        type: Boolean,
        required: true,
    },
    party: {
        type: String,
        required: true
    }
});

const Vote = mongoose.model("votedatas",VoteSchema);
module.exports = Vote;