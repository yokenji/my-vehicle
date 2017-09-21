'use strict';

var userService = require('../user/user.service');
var Promise = require('bluebird');

var jwt = require('jsonwebtoken');
var config = require('../config');
var authJwt = require('../lib/authJwt');
var bcrypt = require('bcrypt');

var authenticate = (req, res) => {
  // Check if username and password exists.
  var email = req.body.email;
  var password = req.body.password;

  // For security reason we will only return this error.
  var error = 'Email/password are incorrect!';

  if (!email || !password) {
    res.status(401).json(
      {
        message: error
      }
    );
    return;
  }

  // Check if email exists.
  userService.findByEmail(email).then( (user) => {
    if (!user) {
      console.log('User not found!')
      res.status(400).json(
        {
          message: error
        }
      );
      return;
    }

    // Compare password.
    if(!bcrypt.compareSync(password, user.attributes.password)) {
      console.log('Invalid password!');
      res.status(401).json(
        {
          message: error
        }
      );
      return;
    }
    authJwt.createToken(user.attributes, req, res);
  })
};

var register = (req, res) => {
  // Follow input is required.
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  if (!name || !email || !password) {
    res.status(403).json(
      {
        message: 'Name, email and password are required!'
      }
    );
    return;
  }

  // Check if user already reqistered.
  userService.findByEmail(email).then( (user) => {
    if (user) {
      res.status(409).json(
        {
          message: 'User already registered.'
        }
      );
      return;
    }

    // save user.
    userService.saveUser(name, email, password).then( (model) => {
      res.status(200).json(
        {
          message: 'User has been registered.'
        }
      );
      return;
    });

  });
}

module.exports = {
  authenticate: authenticate,
  register: register
}