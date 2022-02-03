var path = require('path');

const env = process.env.NODE_ENV || 'development';

console.log('environment:',env);

let dbName = "db.sqlite";

let testDbName = "db_test.sqlite";

let dbPath = path.join(__dirname, '..', 'database', dbName);  

if (env === 'jest' || env === 'test'){
  dbPath = path.join(__dirname, '..', 'database', testDbName);  
}

const base = {
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    migrations: {
        directory: 'migrations',
    },
};

module.exports = base;