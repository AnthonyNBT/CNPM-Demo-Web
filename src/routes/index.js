const carsRouter = require('./cars');
const usersRouter = require('./users');

function route(app) {
    app.use('/cars', carsRouter);
    app.use('/users', usersRouter);
}

module.exports = route;