const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const person = new Schema({
    name:{
        type: String,
        required: true
    },
    target:{
        type: String,
        required: true
    }
})

module.exports = people = mongoose.model('People', person);