const carsRouter = require('./cars');
const usersRouter = require('./users');
const homeRouter = require('./home');

function route(app) {
    app.use('/cars', carsRouter);
    app.use('/users', usersRouter);
    app.use('/', homeRouter);
}

module.exports = route;