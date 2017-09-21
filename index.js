var config = require('./config');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var userRoute = require('./user');
var authRoute = require('./auth');

// can be used on all routes or 1.
var authJwt = require('./lib/authJwt');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

// Routes.
app.use('/login', authRoute);

// Authenticated routes.
app.use('/users', authJwt.verifyToken, userRoute);

app.listen(config.server.port, () => {
  console.log('Server is listening on port: ' + config.server.port);
});