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
        admin.save
    }
    })
}