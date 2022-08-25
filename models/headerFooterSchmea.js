const mongoose = require('mongoose');
const Schema = mongoose.Schema

const headerFooterSchema = new Schema({
    key:{
        type: String
    },
    value:{
        type:String
    }
})

module.exports = mongose.model('headerFooter', headerFooterSchema)
