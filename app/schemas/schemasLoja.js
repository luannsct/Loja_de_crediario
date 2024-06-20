const joi = require('joi');

const schemaCriarUsuarioPro = joi.object({
    cnpj: joi.string()
        .pattern(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/)
        .required()
        .messages({
            '*': 'Favor informar um CNPJ válido'
        }),
    nomefantasia: joi.string()
        .min(3)
        .required()
        .messages({
            '*': 'Favor informar um nome Fantasia com pelo menos 3 caracteres.'
        })
});

module.exports = { schemaCriarUsuarioPro };
