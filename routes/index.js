const express = require('express');

const router = express.Router();

//importar archivos de rutas
const usuarioRouters = require('./usuarioRouters');

module.exports = () => {
    //vincular router de cada archivo de rutas
    usuarioRouters(router);

    return router;
};