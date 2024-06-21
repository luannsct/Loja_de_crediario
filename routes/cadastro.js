var express = require('express');
const { criarNovoUsuario } = require('../app/middleware/criar/usuario/criarnovoUsuario');
const { criarcadastroPro } = require('../app/middleware/criar/Loja/criarNovaLoja');
const { schemaCriarNovoUsuario } = require('../app/schemas/schemasusuario');
const { schemaCriarUsuarioPro } = require('../app/schemas/schemasLoja');
const { schemaDadosCliente } = require('../app/schemas/schemasClientes');
var cadastro = express.Router();

/* GET home page. */
cadastro.post('/cadastrarusuario', criarNovoUsuario(schemaCriarNovoUsuario), (req, res) => {
    return res.status(200).json({ message: 'Teste concluido com sucesso!' });
})
cadastro.post('/cadastroPro', criarcadastroPro(schemaCriarUsuarioPro), (req, res) => {
    return res.status(200).json({ message: 'Teste concluido com sucesso!' });
})

cadastro.post('/enderecoEntrega', async (req, res, next) => {
    try {
        const teste = await schemaDadosCliente.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

}, (req, res) => {
    return res.status(200).json({ message: "Teste cadastro cliente concluido com sucesso!" })
})

module.exports = cadastro;
