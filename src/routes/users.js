const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/userController');

router.get('/register', userController.createUser);
router.get('/login', userController.loginUser);

module.exports = router;