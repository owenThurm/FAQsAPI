const monk = require('monk');

const connectionString = 'localhost/faqsdb';
const db = monk(connectionString);

module.exports = db;