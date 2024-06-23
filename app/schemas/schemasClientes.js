const joi = require('joi');

const schemaDadosCliente = joi.object({
    nomecompleto: joi.string().min(3).required().messages({ '*': 'Favor informar um nome válido com pelo menos 3 caracteres.' }),
    apelido: joi.string().optional().messages({ '*': 'Favor informar um apelido válido' }),
    cpf: joi.string().required().messages({ '*': 'Favor informar um cpf válido' }),
    email: joi.string().email().required().messages({ '*': 'Favor informar um email válido' }),
    telefone: joi.string().required().messages({ '*': 'Favor informar um telefone válido' }),
    cep: joi.string().required().messages({ '*': 'Favor informar um CEP válido!' }),
    numero: joi.string().required().messages({ '*': 'Favor informar um número residencial válido' }),
    perimetro: joi.string().trim().min(5).required().messages({ '*': 'Favor informar um perimetro!' })
});

module.exports = { schemaDadosCliente }