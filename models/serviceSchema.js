const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: {
        type: String
    },
    Description:{
        Type: String
    }
})


const model = mongoose.model('service', serviceSchema);
module.exports = model;
