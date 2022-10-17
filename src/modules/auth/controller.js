const Joi = require('joi');
const AuthenticationModel = require('./model');
const {validatorFunction} = require('../../utils/helper')

module.exports = {
    signup: async (req, res, next) => {
        let { email, password } = req.body
        
        //validation

        if(isValid) {
            new AuthenticationModel(email, password)
            .then(data => {
                res.status(200).json({
                    status: data.status,
                    message: data.message,
                })
            })
            .catch(err => {
                res.status(404).send({
                    status: err.status,
                    message: err.message,
                })
            })
        }        
    },

    login: async (req, res, next) => {

    },

    verifyEmail: async (req, res, next) => {

    },

    resendEmailVerification: async (req, res, next) => {

    },
}