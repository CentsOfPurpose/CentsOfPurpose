require('dotenv').config(); //loading environment variables
Config = require("./config"); //Import the config and make it globally available

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = Config.PORT;

//Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Enable cross domain
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Routes
app.use('/', require('./components/components.routes'));

//Open server
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
})