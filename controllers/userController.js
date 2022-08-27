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
        res.status(500).json
        error: err
    })
}