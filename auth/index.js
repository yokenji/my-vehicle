'use strict';

var express = require('express');
var router = express.Router();

var authCtrl = require('./auth.controller');

router.post('/authenticate', (req, res) => {
  console.log('Authenticate user.');
  authCtrl.authenticate(req, res);
})

router.post('/register', (req, res) => {
  console.log('Register user.');
  authCtrl.register(req, res);
})

module.exports = router;