const Car = require('../models/Car');
const { multipleMongooseToObject } = require('../../uti/mongoose');

class homeController {

    // [GET] /
    home(req, res, next) {
        Car.find({})
            .then(cars => {
                res.render('home', {
                   cars: multipleMongooseToObject(cars) 
                });
            })
            .catch(err => next(err));
    }
}

module.exports = new homeController();