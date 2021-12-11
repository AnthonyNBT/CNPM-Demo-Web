// const ... = require('../models/...');
// const { multipleMongooseToObject } = require('../../uti/mongoose');

class homeController {

    // [GET] /
    home(req, res, next) {
        res.render('home');
    }
}

module.exports = new homeController();