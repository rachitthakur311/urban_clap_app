const mongoose = require('mongoose');

const Schema = mongoose.Schema

const addQuoteSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    mobile:{
        type: String
    },
    requirement:{
        type: String
    },
    message:{
        type: String
    }
})
const model = mongoose.model('addQuote', addQuoteSchema)
module.exports = model;
