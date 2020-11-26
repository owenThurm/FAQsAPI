const express = require('express');
const router = express.Router();
const questions = require('./db/faqsmodel');


//GET ALL
router.get('/', async (req, res) => {
  var allfaqs = await questions.getAll();
  res.json({
    faqs: allfaqs
  });
});

//GET ONE
router.get('/:id', (req, res) => {
  var id = req.params.id;
  res.json({
    'res': 'hello GET ' + id
  });
});

//CREATE ONE
router.post('/', async (req, res) => {
  var put = questions.insert({
    username: 'magic',
    title: 'hello world',
    question: 'question'
  });
  res.json({
    'res': put
  });
});

//UPDATE ONE
router.put('/:id', (req, res) => {
  var id = req.params.id;
  res.json({
    'res': 'hello UPDATE ' + id
  });
});

//DELETE ONE
router.delete('/:id', (req, res) => {
  var id = req.params.id;
  res.json({
    'res': 'hello DELETE ' + id
  });
});

module.exports = router;