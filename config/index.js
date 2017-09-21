'use strict';

var config = require('./env.js')[process.env.NODE_ENV || 'dev'];

module.exports = config;