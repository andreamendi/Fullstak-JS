const express = require('express');
const mongoose = require('mongoose');
const api = require('./api'); //Traenos el archivo principal de la carpeta api
const app = express(); //Importamos Express, framwork para crear API's
const port = 8000; //Se declara el puerto por el que correrá Node


mongoose.connect(process.env.mongo)
    .then(result => {
        console.log('Conectado con Mongo');
    })
    .catch(err => {
        console.log(err);
    })


//Una función para que app escuche.
app.listen(port, () => {
    console.log(`Listening in the port: ${port}`);
    console.log(`${process.env.url}`);
    
});

app.use('/api', api);