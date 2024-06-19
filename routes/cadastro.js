var express = require('express');
const { criarNovoUsuario } = require('../app/middleware/criar/usuario/criarnovoUsuario');
const { schemaCriarNovoUsuario } = require('../app/schemas/schemasusuario');
var cadastro = express.Router();

/* GET home page. */
// cadastro.get('/', cadastrarNovoAtivoMiddleware, cadastrarNovoAtivo)
cadastro.post('/cadastrarusuario', criarNovoUsuario(schemaCriarNovoUsuario), (req, res) => {
    return res.status(200).json({ message: 'Teste concluido com sucesso!' });
})

module.exports = cadastro;
