const knex = require('knex');
const connectionConfig = require('../../knexfile');

module.exports = knex(connectionConfig.development);
