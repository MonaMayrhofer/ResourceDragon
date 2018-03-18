const connection = require('../dbconnection');
const Sequelize = require('sequelize');

const Task = connection.define('task', {
  title: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.CHAR,
  },
});

// FORCE DROPS OLD TABLE
Task.sync({force: true}).then(() => {
  return Task.create({
    title: 'TestTask',
    status: 'O',
  });
});

module.exports = Task;
