const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Car = new Schema({
    name: {type: String},
    manufacture: {type: String},
    engine: {type: String},
    power: {type: Number},
    topSpeed: {type: Number},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Car', Car);