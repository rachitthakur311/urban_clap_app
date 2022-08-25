const mongoose = require("mongoose");



const Schema = mongoose.Schema;
const serviceProviderSchema = new Schema({
    name:{
        type: String
    },
    age:{
        type: Number
    },
    adress:{
        type: String
    },
    country:{
        type: String
    },
    state:{
        type: String
    },
    city:{
        type: String
    },
    organization:{
        type: String
    },
    exprince:{
        type: String
    },
    licence:{
        type: String
    }
},{timestamps: true})

const model = mongoose.model('serviceprovider', serviceProviderSchema);

module.exports = model

