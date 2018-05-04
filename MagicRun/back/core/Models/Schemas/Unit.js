const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    health: 0,
    type: {
        type: String,
        required: true
    },
    sub_type: {
        type: String,
        required: true
    }
});


module.exports = schema;