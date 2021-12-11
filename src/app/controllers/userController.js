const Course = require('../models/User');
// const { multipleMongooseToObject } = require('../../uti/mongoose');

class userController {

    // [GET] /users/register
    createUser(req, res, next) {
        res.render('users/register');
    }
}

module.exports = new userController();