'use strict';

var conf = require('./knexfile');
var knex = require('knex')(conf);
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;