const { number } = require('mathjs');
const mongoose = require('mongoose');

const MessageCountSchema = mongoose.Schema({
    _id: { 
        type: String,
        required: true
    },
    messageCount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('message-counts', MessageCountSchema)
