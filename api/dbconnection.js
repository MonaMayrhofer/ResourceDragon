const Sequelize = require('sequelize');
const sequelize = new Sequelize('apitest', 'root', 'changeme', {
  host: 'localhost',
  dialect: 'mysql',
});
sequelize.authenticate()
.then(() => {
  console.log('Connection has been established!');
}).catch(() => {
  console.log('Unable to connect to database:', err);
});
module.exports = sequelize;
