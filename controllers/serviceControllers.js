const express = require('express');
const service = require('../models/serviceSchema');

const addServiceDescription = (req,res)=>{
    const Service = new Service({
        name: req.body.name,
        Description: req.body.Description
    })
    Service.save()
    .then(result=>{
        res.status(200).json({
            result: result,
        })
    })
    .catch(err=>{
        res.status(500).json({
            error: err,
        })
    })
}

module.exports = {addServiceDescription}