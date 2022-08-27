const mongoose = require('mongoose');
const Schema = mongoose.Schema

    const categorySchema = new Schema({
        name : {
            type: String
        },
        parent:{
            type: String,
            dafault: null
        },
        uploadImage: {
            type: String
        },
        homepage: {
            type: number,
            default: 0
        }

    }) 

    module.exports = mongoose.model('category', categorySchema)