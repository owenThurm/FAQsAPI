const express = require('express');
const app = express();
const port = 3000;
const faqs = require('./faqs');

app.use('/faqs', faqs);

app.listen(port, (err) => {
  if(err) console.log(err);
  else console.log('App listening on port ' + port + '...');
});