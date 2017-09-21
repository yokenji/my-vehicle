'use strict';

var config = require('../config');
var jwt = require('jsonwebtoken');

var verifyToken = (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.jwt.security_token, (err, decoded) => {
      if (err) {
        res.json({success: false, message: 'Token invalid'});
      } else {
          res.decoded = decoded;
          next();
        }
    });
  } else {
      res.json({success: false, message: 'No token provided'}); // messages can be codes.
  }
}

var createToken = (user, req, res) => {
  var token = jwt.sign(user, config.jwt.security_token, {expiresIn: "1h"}); // jwt params can be put somewhere else.
  res.json(
    {
    token: token
    }
  );
}

module.exports = {
  verifyToken,
  createToken
};