const Sequelize = require('sequelize');
const debug = require('debug')('dbconnection');


const sequelize = new Sequelize('apitest',
  process.env.PRB_DATABASE_USER,
  process.env.PRB_DATABASE_PASSPHRASE, {
    host: process.env.PRB_DATABASE_HOST,
    dialect: 'mysql',
});

/** */
function connect() {
  debug('Trying to connect to '+
    process.env.PRB_DATABASE_HOST+' as '+process.env.PRB_DATABASE_USER);
  sequelize.authenticate()
  .then(() => {
    debug('Connection has been established!');
  }).catch((err) => {
    debug('Connection failed: '+err);
    debug('Trying to reconnect in 5s');
    setTimeout(()=>{
      connect();
    }, 5000);
  });
}
connect();

module.exports = sequelize;
