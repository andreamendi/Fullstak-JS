const express = require('express');
const router = express.Router();
const Info = require('../models/info.js');

router.get('/', (req, res) =>{
    Info.find()
    .then(info => {
        res.status(200).json(info) //Lo que encontro en la DB
    })
    .catch(err => {
        res.json({
            error: err
        })
    })
});




module.exports = router;