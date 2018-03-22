const Sequelize = require('sequelize');


const sequelize = new Sequelize('apitest',
  process.env.PRB_DATABASE_USER,
  process.env.PRB_DATABASE_PASSPHRASE, {
    host: process.env.PRB_DATABASE_HOST,
    dialect: 'mysql',
});

/** */
function connect() {
  console.log('Trying to connect to '+
    process.env.PRB_DATABASE_HOST+' as '+process.env.PRB_DATABASE_USER);
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established!');
  }).catch((err) => {
    console.log('Connection failed: '+err);
    console.log('Trying to reconnect in 5s');
    setTimeout(()=>{
      connect();
    }, 5000);
  });
}
connect();

module.exports = sequelize;
