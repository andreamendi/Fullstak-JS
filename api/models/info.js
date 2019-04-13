const mongoose = require('mongoose');


//Se define el schema
const infoSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number
});


//El modelo siempre va en mayúscula
module.exports =mongoose.model('Info', infoSchema);