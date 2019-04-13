const Info = require('../models/info.js');




//post
function createInfo(req, res){
    console.log(req.body);
    const newInfo = new Info({
        nombre: req.body.nombre ,
        apellido: req.body.apellido,
        edad: req.body.edad
    });

    newInfo.save()
        .then(resp => {
            res.status(201).json({
                message:'Se guardo la información'
            })
        })
        .catch(resp => {
            res.status(500).json({
                error: err
            })
        })
}

module.exports = createInfo;