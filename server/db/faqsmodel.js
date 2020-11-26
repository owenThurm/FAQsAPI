const db = require('./connection');
const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(10).required(),
  title: Joi.string().max(50).required(),
  question: Joi.string().max(500).required()
});

const questions = db.get('questions');

function getAll() {
  return questions.find();
}

function insert(message) {
  var result = schema.validate(message);
  if(result.error) Promise.reject(result.error);
  else {
    message.created = new Date();
    return questions.insert(message);
  }
}

module.exports = {getAll, insert};