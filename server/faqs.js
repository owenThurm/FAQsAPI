const express = require('express');
const router = express.Router();
const faqs = require('./db/faqsmodel');

//
router.get('/', (req, res) => {
  res.json({
    'res': 'hello GET all'
  });
});

router.get('/messages', async (req, res) => {
  var faqAll = await faqs.getAll();
  res.json({
    faq: faqAll
  });
})

router.get('/:id', (req, res) => {
  var id = req.params.id;
  res.json({
    'res': 'hello GET ' + id
  });
});

router.post('/', (req, res) => {
  res.json({
    'res': 'hello CREATE one'
  });
});

router.put('/:id', (req, res) => {
  var id = req.params.id;
  res.json({
    'res': 'hello UPDATE ' + id
  });
});

router.delete('/:id', (req, res) => {
  var id = req.params.id;
  res.json({
    'res': 'hello DELETE ' + id
  });
});

module.exports = router;