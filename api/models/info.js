const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    nombre: String,
    apellido: String
});

module.exports =mongoose.model('Info', infoSchema);