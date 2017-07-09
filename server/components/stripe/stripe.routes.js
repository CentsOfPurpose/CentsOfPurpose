const express = require('express');
const route = express.Router();
const controller = require('./stripe.controller')

route.post('/charge', controller.chargeCreditCardAction)

module.exports = route;