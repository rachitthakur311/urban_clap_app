const mongoose = rquire('mongoose');

const schema = mongoose.Schema

const paymentDetailsSchema = new Schema({
    userId:{
        type:String
    },
    serviceBookingId:{
        type: String
    },
    id:{
        type: String
    },
    entity:{
        type: String
    },
    amount:{
        type: Number
    },
    amount_paid:{
        type:Number
    },
    amount_due:{
        type: Number
    },
    currency:{
        type: String
    },
    receipt:{
        type: String
    },
    offer_id:{
        type: String
    },
    status:{
        type: String
    },
    attempts:{
        type: Number
    },
    notes:{
        type: Array
    }
})

const model = mongoose.model('paymentDetails', paymentDetailsSchema);

module.exports = model
