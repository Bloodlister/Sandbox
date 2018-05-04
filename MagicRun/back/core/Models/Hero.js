const mongoose = require('mongoose');
const HeroSchema = require('./Schemas/Unit');
const HeroClass = require('./Class/Hero');

HeroSchema.add({
    player_id: String,
    mentor: String,
});
HeroSchema.loadClass(HeroClass);

const HeroModel = mongoose.model('hero', HeroSchema, 'heroes');

HeroModel.prototype.greetings = [
    "Greetings!",
    "This is for freedom!",
    "Oh my . . .",
    "You heathen!"
];

module.exports = HeroModel;

