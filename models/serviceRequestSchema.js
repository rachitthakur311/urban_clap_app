const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const serviceRequestSchema = new Schema({
serviceId:{
    type: String
},
userId:{
    type:String
},
packageId:{
    typr: String
},
dateTime:{
    type: Date
},
Location:{
    type: String
},
Status:{
    type: Number,
    default: 1
}
},{timestamps: true})

const model = mongoose.model('serviceRequest', serviceRequestSchema);

module.exports = model;