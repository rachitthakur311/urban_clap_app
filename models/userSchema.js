const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const customerSchema = new mongoose.Schema({
    userEmail:{type: String, require: true, unique: true},
    password: {type: String, require: true},
},
{
    collection: 'user'
})


const model = mongoose.model('user', customerSchema)

module.exports = model;