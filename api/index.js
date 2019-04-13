const express = require('express');
const router = express.Router();
const info = require('./info');
const cors = require('cors');

router.use(cors());

//Todas las peticiones de cualquier tipo, se le muestra un json.
router.all('/', (req, res) =>{
    res.json({
        info: `${process.env.url}/api/info`
    });
});

 //Le estamos delegando el envio a info. Estamos creando una ruta.
router.use('/info', info);

module.exports = router;