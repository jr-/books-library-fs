const promise = require('bluebird');
const options = { promiseLib: promise, capSQL: true };
const pgp = require('pg-promise')(options);
const config = require('./env/config')();

function checkdb() {
  return `postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.db}`;
}

const connectionString = checkdb();
const db = pgp(connectionString);

module.exports = {
  db,
};
