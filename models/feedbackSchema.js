const mongoose = require('mongoose');
const Schema = mongoose.Schema

const feedbackSchema = new Schema({
    userId:{
        type: String
    },
    bookingId:{
        type:String
    },
    serviceId:{
        type: String
    },
    rating:{
        type:String
    },
    feedback:{
        type: String
    },
    dateTime:{
        type:Date
    }
})

const model = mongoose.model('feedback',feedbackSchema)
module.exports = model