var config = require('./config');

console.log(config)
module.exports = {
  client: 'sqlite3',
  connection: {
    filename: config.db.uri
  },
  migrations: {
    directory: config.db.migrations
  },
  seeds: {
    directory: config.db.seeds
  },
  useNullAsDefault: true
};