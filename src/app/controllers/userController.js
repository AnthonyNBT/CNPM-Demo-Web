const Course = require('../models/User');
// const { multipleMongooseToObject } = require('../../uti/mongoose');

class userController {

    // [GET] /users/register
    createUser(req, res, next) {
        res.render('users/register');
    }

    loginUser(req, res, next) {
        res.render('users/login');
    }
}

module.exports = new userController();