const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hero = require('./Hero');
const Player = new Schema({
    player_name: String,
    token: String,
    heroes: [Hero]
});