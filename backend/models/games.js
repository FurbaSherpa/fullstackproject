const mongoose = require('mongoose');

// ***** Game Model Schema *****
const gameSchema = mongoose.Schema({
    Tite: String,
    Platform: String,
    Genre: String,
    Rating: String,
    Publisher: String,
    Release: String,
    status:{
        type: String,
        default: 'Open'
    }
})

module.exports = mongoose.model('Game', gameSchema);