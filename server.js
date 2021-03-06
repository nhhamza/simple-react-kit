const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const autocompleteSearchResults = require('./__mocks__/autocomplete-search-results.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
});

app.get('/api/getSearchResults', (req, res) => {
  const test = req.query.text;

  const findElements = test =>
    autocompleteSearchResults.response.filter(
      element => element.title.toLowerCase().indexOf(test.toLowerCase()) > -1,
    );

  const result = findElements(test);

  setTimeout(() => res.status(200).send(JSON.stringify(result)), 1000);
});
