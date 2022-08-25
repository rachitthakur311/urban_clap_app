const mongoose  = require('mongoose');

const serviceSchema = new Schema({
    name: {
        type: String
    },
    Description:{
        Type: String
    }
})


const model = mongoose.model('service', serviceSchema);
model.exports = model;
