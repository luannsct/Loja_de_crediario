var express = require('express');
const { criarNovoUsuario } = require('../program/middleware/criar/usuario/criarnovoUsuario');
const { criarcadastroPro } = require('../program/middleware/criar/Loja/criarNovaLoja')
const { schemaCriarNovoUsuario } = require('../program/schemas/schemasusuario');
const { schemaCriarUsuarioPro } = require('../program/schemas/schemasLoja')
var cadastro = express.Router();

/* GET home page. */
cadastro.post('/cadastrarusuario', criarNovoUsuario(schemaCriarNovoUsuario), (req, res) => {
    return res.status(200).json({ message: 'Teste concluido com sucesso!' });
})
cadastro.post('/cadastroPro', criarcadastroPro(schemaCriarUsuarioPro), (req, res) => {
    return res.status(200).json({ message: 'Teste concluido com sucesso!' });
})

module.exports = cadastro;
