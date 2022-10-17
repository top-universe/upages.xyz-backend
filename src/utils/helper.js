const Joi = require('joi')

// This function would hash our password
exports.hashFunction = async (password) =>  {
    return password
}

exports.generateJWTToken = async (id, email) => {
    return `${id}+${email}`
}

exports.validatorFunction = async (object) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2}),
        password: Joi.string().min(5)
    })
    
    try {
        return await schema.validateAsync(object);
    }
    catch (err) { }
}