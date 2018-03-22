const Sequelize = require('sequelize');
const sequelize = new Sequelize('apitest',
  process.env.PRB_DATABASE_USER,
  process.env.PRB_DATABASE_PASSPHRASE, {
    host: process.env.PRB_DATABASE_HOST,
    dialect: 'mysql',
});
sequelize.authenticate()
.then(() => {
  console.log('Connection has been established!');
}).catch(() => {
  console.log('Unable to connect to database:', err);
});
module.exports = sequelize;
