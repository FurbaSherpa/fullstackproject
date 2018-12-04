const mongoose = require('mongoose');

// ***** Player Model Schema *****
const playerSchema = mongoose.Schema({
    userName: String,
    rank: String,
    score: String,
    time: String,
    favorite: String,
    customer: String,
    status:{
        type: String,
        default: 'Open'
    }
})

module.exports = mongoose.model('Player', playerSchema);