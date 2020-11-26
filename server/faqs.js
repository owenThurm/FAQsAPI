const express = require('express');
const router = express.Router();

//
router.get('/', (req, res) => {
  res.json({
    'res': 'hello GET all'
  });
});

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