/** Database setup for jobly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client(DB_URI);

client.connect()
  .then(() => {
    console.log('Connected to database successfully');
  })
  .catch(err => {
    console.error('Error connecting to database:', err.message);
    process.exit(1); // Exit the process with a non-zero status code to indicate failure
  });

module.exports = client;
