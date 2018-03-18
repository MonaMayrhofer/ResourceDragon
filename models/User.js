const connection = require('../dbconnection');
const Sequelize = require('sequelize');
// const genApiKey = require('../util/idgen')

const User = connection.define('user', {
  userName: {
    type: Sequelize.STRING,
  },
  apikey: {
    type: Sequelize.STRING(36), // eslint-disable-line new-cap
  },
});

// FORCE DROPS OLD TABLE
User.sync();

/* .then(() => {
  return User.create({
    userName: 'Obyoxar',
    apikey: genApiKey(),
  });
});*/

module.exports = User;
