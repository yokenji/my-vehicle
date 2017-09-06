'use strict';

var express = require('express');
var router = express.Router();

//var User = require('../modules/user');

router.get('/', (req, res) => {
    res.send('Show all users.')
})

module.exports = router;