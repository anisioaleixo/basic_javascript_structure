const express = require('express');

const route = express.Router();

route
    //Home da aplicação
    .get('/',(req,res)=>res.send({
        API:"Rest API",
        Autor: "Anisio Aleixo",
        Data:"01/08/2020"
    }));

module.exports = route;