'use strict';

var env = 'development';
var conf = require('./knexfile')[env];
var knex = require('knex')(conf);
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;