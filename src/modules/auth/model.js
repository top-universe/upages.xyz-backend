const {hashFunction, generateJWTToken} = require('../../utils/helper')
const {v4} = require('uuid')

module.exports = class AuthenticationModel {
    #email
    #password
    constructor(email, password) {
        this.#email = email
        this.#password = password
    }

    /**
     * 
     * @returns 
     */
    async signup() {
        try {
            let email =  this.email
            let password = this.password
            let hashedPassword = hashFunction(password)
            
            //check if the account exists
            

            //create a new account
            await AuthenticationRepository.signup(v4(), email, password)
            .then(data => {
                generateJWTToken(id, email)
            })
            .catch()

        } catch (err) {
            throw Error('')
    }
    }

    async login() {
        return ''
    }
}

class UserAuthentication extends Authentication {

}

class AdminAuthentication extends Authentication {

}