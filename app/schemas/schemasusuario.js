const joi = require('joi');
const schemaCriarNovoUsuario = joi.object({
    nome: joi.string().min(3).required().messages({
        'any.required': 'Favor informar um nome válido'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'E-mail inválido!', 'string.email': 'Informe um e-mail válido'
    }),
    senha: joi.string().min(10).required().messages({
        'any.required': 'Senha inválida!', 'string.min': 'Senha muito fraca!'
    })
});



module.exports = { schemaCriarNovoUsuario }