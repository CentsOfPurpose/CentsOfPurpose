const express = require('express');
const route = express.Router();
const plaidController = require('./plaid.controller');

route.get('/path', plaidController.retrieveUserTransactionsAction);
route.post('/access_token', plaidController.handleAccessTokenAction);
route.get('/event', plaidController.eventAction);

module.exports = route;