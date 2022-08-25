const mongoose = require('mongoose');
const Schema = mongoose.Schema



const imageUploadSchema = new Schema({
    serviceId:{
        type: String
    },
    uploadImage:{
        type: String
    },

})

module.exports = mongoose.model('sliderImage', imageUploadSchema)

