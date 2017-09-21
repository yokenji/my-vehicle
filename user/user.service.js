'use strict';

var User = require('./user.module');
var bcrypt = require('bcrypt');

var salt = bcrypt.genSalt(10);

var findAll = () => {
  console.log('Find all users.')
  return User.forge()
    .fetchAll();
}

var findById = (id) => {
  console.log('Find user by id: ' + id);
  return User.forge({id: id})
    .fetch();
}

var findByUsername = (userName) => {
  console.log('Find user by username: ' + userName);
  return User.forge({username: userName})
    .fetch();
};

var findByEmail = (email) => {
  console.log('Find user by email: ' + email);
  return User.forge({email: email})
    .fetch();
}

var saveUser = (name, email, password) => {
  console.log('Save user with email: ' + email);
  return User.forge({name: name, email: email, password: bcrypt.hashSync(password, 10)})
    .save();
}

module.exports = {
  findAll: findAll,
  findById: findById,
  findByUsername: findByUsername,
  findByEmail: findByEmail,
  saveUser: saveUser
}