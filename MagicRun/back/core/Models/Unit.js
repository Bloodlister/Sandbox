const mongoose = require('mongoose');
const UnitSchema = require('./Schemas/Unit');

const Unit = mongoose.model('unit', UnitSchema);

module.exports = Unit;