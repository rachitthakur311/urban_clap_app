const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const servicePackageBookngSchema = new Schema({
    serviceId:{
        type: String
    },
    userId:{
        type:String
    },
    serviceProviderId:{
        type:String
    },
    dateTime:{
        type: date
    },

},{timestamps:true})

const model = mongoose.model('servicebooking', servicePackageBookngSchema)
module.exports = model