const express = require('express');

const app = express()

app.get('/teste', (req,rs) => {
  return res.json({hello: 'world 2'})
});

app.listen(3333);