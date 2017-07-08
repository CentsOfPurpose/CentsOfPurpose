"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Config = require("./config"); //Import the config and make it globally available
const PORT = Config.PORT;

//Middlewares
app.use(bodyParser.json());

//Routes
app.use('/', require('./components/components.routes'));

//Open server
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
})