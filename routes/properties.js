var express = require('express');
var fs = require('fs');
var router = express.Router();

var properties;
fs.readFile('./store/properties.json', 'utf8', function (err, data) {
  if (err) throw err;
  properties = JSON.parse(data);
});

/* GET properties listing. */
router.get('/', function(req, res, next) {
  res.json(properties);
});

module.exports = router;
