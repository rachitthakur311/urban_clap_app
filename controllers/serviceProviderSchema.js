const { Certificate } = require('crypto');
const express = require('express');
const serviceProvider = require('../controllers/serviceProviderSchema');


const addServiceProvider = (req,res)=>{
    const Services  = new ServiceProvider({
        Name: req.body.Name,
        Age: req.body.Age,
        Address: req.body.Address,
        Country: req.body.Country,
        State: req.body.State,
        City: req.body.City,
        Organization: rreq.body.Organization,
        Experience: req.body.Experience,
        Certificate: req.body.Certificate,
        Licence: req.body.Licence
    })
    Services.save()
    .then(result =>{
        res.status(200).json({
            result: result,
        })
    })
    .catch(err => {
        res.status(200).json({
            error: err,
        })
    })
}

const updateServiceProvider = (req, res) =>{
    ServiceProvider.findOneAndUpdate({id: req.params.id},{
        $set:{
            Name: req.body.Name,
            Age: req.body.Age,
            Address: req.body.Address,
            Country: req.body.Country,
            State: req.body.state,
            City: req.body.City,
            Organization: req.body.Organization,
            Experience: req.body.Experience,
            Certificate: req.body.Certificate,
            Licence: req.body.Licence
            
        }
    })
    .then(result =>{
        res.status(200).json({
           updateServiceProvider: result
        })
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}



const deleteServiceProvider = (req, res)=>{
    serviceProvider.remove({_id: req.params.id})
    .then(result=>{
        res.status(200).json({
            Deleted_ServiceProvider: result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
}

const getServiceProvider = (req, res)=>{
    serviceProvider.find()
    .then(result =>{
        res.status(200).json({
            getData: result
        })
    })
    .catch(error=>{
        console.log(err)
        res.status
    })
}

module.exports = {addServiceProvider, updateServiceProvider, deleteServiceProvider, getServiceProvider}