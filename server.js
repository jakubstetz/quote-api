const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

app.get('/api/quotes/random', (req, res, next) => {
  res.send({quote: getRandomElement(quotes)});
})

app.get('/api/quotes', (req, res, next) => {
  const returnedArray = [];
  if (req.query.name) {
    for (const item of quotes) if (item.person === req.query.name) returnedArray.push(item.quote);
  } else {
    for (const item of quotes) returnedArray.push(item.quote);
  }
  res.send({quotes: returnedArray});
})