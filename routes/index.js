const router = require('express').Router()
const userController = require('../controllers/userController')
const authToken = require('../middleware/authentication')
const loginController = require('../controllers/loginController')


module.exports = () => {

    router.post('/login', loginController.login);

    router.post('/users', userController.newUser)
    
    return router;

}