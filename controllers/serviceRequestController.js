const express = require('express');
const servicerequest = require('../models/serviceRequestSchema');


const addServiceRequest = (req,res)=>{
    const service = new ServiceRequest({
        serviceId: req.body.ServiceId,
        userId:  req.body.userId,
        packageId: req.body.packageId,
        dateTime: req.body.dateTime,
        Location: req.body.Location,
        status: req.body.status
    })
    service.save()
    .then(result =>{
        res.status(200).json({
            result:result
        })
    })
    .catch(err =>{
        res.status(500).json({
            error: err,
        })
    })
}

const updateServiceReqest = (req,res) =>{
    console.log(req.params.id)
    servicerequest.findOneAndUpdate({_id:req.params.id},{
        $set:{
            serviceId:req.body.serviceId,
            userId:req.body.userId,
            packageId:req.body.packageId,
            dateTime:req.body.dateTime,
            Location:req.body.Location,
            status:req.body.status
        }
    })
    .then(result =>{
        res.status(200).josn({
            Data: result
        })
    })
    .catch(erroe=> {
        res.status(500).json({
            error:err
        })
    })
}

const deleteServiceRequest = (req, res)=>{
    servicerequest.remove({id: req.params.id})
    .then(result =>{
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

const getAllServiceRequest = (req,res)=>{
    servicerequest.find().then(result=>{
        res.status(200).json({
            result: result
        })
    })
    .catch(err =>{
        res.status(500).json({
            error:err
        })
    })
}
