const serviceBook = require('../models/serviceBookingSchema');


function generateOTP(){
    var digits = '123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++){
        OTP += digits[Math.floor(math.random() * 10)]
    }

return OTP
}


const BookService = (req, res)=>{
    const Service = new serviceBook({
        ServiceId: req.body.Id,
        UserId: req.body.UserId,
        ServiceProviderId: req.body.ServiceProviderId,
        dateTime: req.body.dateTime ,

        Location: req.body.Location,
        Address:req.body.Address,
        PackageId: req.body.PackageId,
        startOtp: generateOTP(),
        EndOTP:  generateOTP()
    }) 
    Services.save()
    .then(result =>{
        res.status(200).json({
            result: result

        })
    })
    .catch(err =>{
        res.status(500).json({
            error: err,

        })
    })

}


const updateServiceStatus = (req, res) =>{
    serviceBook.findOneAndUpdate({_id: req.params.Id},{
        $set:{
            Location: req.body.Location,
            Address: req.body.Address,
            PackageId: req.body.PackageId,
            ServiceProderId: req.body.ServiceProderId,
            startOtp: req.body.startOtp,
            EndOtp: req.body.EndOtp,
            status: req.body.status
        }
    })
    .then(result =>{
        res.status(200).json({
            result: result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}





