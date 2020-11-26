const db = require('./connection');

const questions = db.get('questions');

function getAll() {
  return questions.find();
}

module.exports = {getAll};