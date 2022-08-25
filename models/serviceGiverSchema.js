const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const serviceGiverSchema = new Schema({
    ServiceProviderId:{
        type: String
    },
    serviceId:{
        type: String
    },
    packageId:{
        String: String
    },
    Rate:{
        type: String
    }
},{timestamps:true})

const model = mongoose.model('serviceGiver', serviceGiverSchema)

module.exports = model
