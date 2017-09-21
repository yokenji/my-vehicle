'use strict';

var userService = require('./user.service');

var getUsers = (req, res) => {
  userService.findAll().then( (users) => {
    res.json(users);
  }, (err) => {
    console.log('Error: ' + err);
  });
};

var getUserById = (req, res) => {
  var id = req.params.id;
  userService.findById(id).then( (user) => {
    res.json(user);
  }, (err) => {
    console.log('Error: ' + err);
  });
};

function checkFound(res, user) {
  if (!user) {
    res.status(404).json({
      message: 'User not found!'
    });
  }
}

module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
}