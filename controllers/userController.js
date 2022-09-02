const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../models/userSchema');
const addQuote = require('../models/addQuote');
const country = require('../models/countary');

const userRegister = (req, res) =>{
    bcrypt.hash(req.body.password, 10, (err, hash)=>{
    if(err)
    {
        return res.status(500).json({
            error: err
        })
    }
    else{
        const admin = new user({
            userEmail: req.body.userEmail,
            password: hash
        })
        admin.save()
        .then (result=>{
            res.status(200).json({
                Data:result
            })
        })
        .catch(err =>{
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
    }
    })
}


const userLogin = (res, req)=>{
    user.find({userEmail: req.body.user})
    .exe()
    .then(user=>{
        if(user.length<1)
        {
            return res.status(401).json({
                msg: 'user not found'
            })
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
            if(!result){
                return res.status(401).json({
                    msg: 'password does not match'
                })
            }
           if(result) 
           {
            const token = jwt.sign({
                userEmail: user[0].userEmail
            }, 
            'this is dummy text',
            {
                expiresIn: "24h"
            }
            );
            res.status(200).json({
                userEmail: user[0].userEmail,
                token: token
            })
           }
        })
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    })
}

const getUserProfile = (req,res,next)=>{
    const _id = req.params.id;
    users.findById(_id)
    .exe()
    .then(result=>{
        res.status(200).json({
            Data:result
        })
    })
   .catch(err=>{
    console.log(err)
    res.status(500).json({
        error:err
    })
   })
}

const userChangePassword = async(req,res)=>{
console.log('change password');
try{
    const {userId} = req.params;
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const userPassword = await Users.findByIdAndUpdte({_Id: userId}, {password: password}, {new: true});
    return res.status(200).json({
        status: false,
        data: userPassword
    })
}catch(err){
    return res.status(400).json({
        status: false,
        error: 'Error Occured'
    })
}
}

const addQuote = (req, res)=>{
    const quote = new addQuote({
        name: req.body.name,
        emil: req.body.email,
        mobile:req.mobile.email,
        Requirements: req.body.Requirements,
        message: req.body.message,
    })
    quote.save()
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

const countryCode = (req,res)=>{
    const countary = new country({
        name: req.body.name,
        dail_code: req.body.dail_code,
        code: req.body.code
    })
    country.sav()
    .then(result =>{
        res.status(200).json({
            result: result,
        })
    })
    .catch(err =>{
        res.status(500).json({
            error:err,
        })
    })
}

getCountry = (req, res)=>{
    country.find()
    .then(result=>{
        res.status(200).json({
            result: result
        })
    })
    .catch( err =>{
        res.status(500).json({
            error:err,
        })
    })
}

updateCountry = (req, res)=>{
    
}







module.exports ={userRegister, userLogin, getUserProfile, userChangePassword, getCountry}