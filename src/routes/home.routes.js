const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controler');

router.post('/', homeController.login);

module.exports = router;