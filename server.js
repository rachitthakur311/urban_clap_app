const express = require('express');
const dotenv = require("dotenv")
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');


const mongoUrl = "mongodb://localhost:27017"
mongoOptions ={
useNewUrlParser: true,
useUnifiedTopology: true
};

mongoose.connect(mongoUrl, mongoOptions)
.then(()=>{
    console.log("mongo is connected!")
    app.emit("mongoConnected")
})
.catch(err=>{
    console.log(err)
})


app.use('/api/app', userRoutes);


app.listen(3000,()=>{
    console.log("app is running on the prot 3000")
})

