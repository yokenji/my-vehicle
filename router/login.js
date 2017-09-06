'use strict';

var express = require('express');
var router = express.Router();

var User = require('../modules/user');

router.post('/authenticate', (req, res) => {
    console.log('User: ' + req.body.username);
  User.forge({
      login: req.body.username
  }).fetch().then((user) => {
      res.send(user.toJSON())
  })
})

module.exports = router;