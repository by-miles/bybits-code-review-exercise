const config = require('./knex');
const knex = require('knex');
module.exports = knex(config);