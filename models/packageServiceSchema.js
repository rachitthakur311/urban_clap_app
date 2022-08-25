const mongoose = require('mongoose');

const Schema = mongoose.Schema

const packageServiceSchema = new Schema({
    name:{
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type: String
    },
    serviceId:{
        type: String
    }
})


const model = mongoose.model('package', packageServiceSchema);

module.exports = model