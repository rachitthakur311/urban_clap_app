const mongose = require("mongoose")
const Schema = mongoose.Schema


const countrySchema = new mongoose.Schema({
    name:{
        type: String
    },
    dail_code:{
        type: String
    },
    code:{
        type: String
    }
})

const model = mongoose.model('country', countrySchema)
module.exports = model