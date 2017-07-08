const express = require('express');
const route = express.Router();

route.use('/stripe', require('./stripe/stripe.routes'));
route.use('/plaid', require('./plaid/plaid.routes'));
route.use('/charity', require('./charity/charity.routes'));

module.exports = route;