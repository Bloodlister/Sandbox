const mongoose = require('mongoose');
const UnitSchema = require('./Schemas/Unit');
const UnitClass = require('./Class/Unit');

UnitSchema.loadClass(UnitClass);

const UnitModel = mongoose.model('unit', UnitSchema);

module.exports = UnitModel;