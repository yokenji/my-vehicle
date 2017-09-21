'use strict';

var express = require('express');
var router = express.Router();

var userCtrl = require('./user.controller');

router.get('/', (req, res) => {
  userCtrl.getUsers(req, res);
});

router.get('/:id', (req, res) => {
  userCtrl.getUserById(req, res);
});

module.exports = router;