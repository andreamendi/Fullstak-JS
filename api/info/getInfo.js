const Info = require('../models/info.js');

function getInfo(req, res){
    Info.find()
    .then(info => {
        res.status(200).json(info) //Lo que encontro en la DB
    })
    .catch(err => {
        res.json({
            error: err
        })
    })
}

module.exports = getInfo;