const serviceGiver = require('../models/serviceGiverSchema');


const addServiceGiver = (req, res)=>{
    const service = new serviceGiver({
    serviceProviderId: req.body.serviceProviderId,
    serviceId: res.body.serviceId,
    packageId: req.body.packageId,
    Rate: req.body.Rate
    })
    service.save()
    .then(result=>{
        req.status(200).json({
            result: result
        })
    })
    .catch(err =>{
        res.status(500).json({
            error:err,
        })
    })
}

const updateServiceGiver = (req,res)=>{
    console.log(req.params.Id);
    serviceGiver.findOneAndUpdate({_id:req.params.id},{
        $set:{
        serviceProviderId: req.body.serviceProviderId,
        serviceId: res.body.serviceId,
        packageId: req.body.packageId,
        Rate: req.body.Rate
    }
    })
    .then(result=>{
        res.status(200).json({
            Data: result
        })
    })
    .catch(err=>{
        res.staus(500).json({
            error:err
        })
    })
    }

    const deleteServiceGiver = (req, res)=>{
    serviceGiver.remove({_id: req.params.id})
    .then(result=>{
        res.status.json (200).json({
            result: result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    })
    }


const getAllServiceGiver = (req, res) =>{
    serviceGiver.find()
    .then(result=>{
        res.status(200).json({
            result: result
        })
    })
    .catch(err =>{
        res.status(500).json({
            error: err
    })
    })
}


module.exports = {addServiceGiver, updateServiceGiver, deleteServiceGiver, getAllServiceGiver}