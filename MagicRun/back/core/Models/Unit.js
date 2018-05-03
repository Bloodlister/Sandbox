const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
    name: String,
    type: String,
    sub_type: String
});

const Unit = mongoose.model('unit', UnitSchema);

module.exports = Unit;