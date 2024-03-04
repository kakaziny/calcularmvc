const express = require('express');
const Calculadora = require('../model/calculo.js');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const {altura, base} = req.body;
    const area = Calculadora.area(
        parseFloat(altura), parseFloat(base));
        res.redirect(`/resultado.html?area=${area}`);
        //res.send(`A área é: ${area}`);
});

module.exports = resultado;