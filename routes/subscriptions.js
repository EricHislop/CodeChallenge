var express = require('express');
var fs = require('fs');
var router = express.Router();

var subscriptions;
fs.readFile('./store/subscriptions.json', 'utf8', function (err, data) {
  if (err) throw err;
  subscriptions = JSON.parse(data);
});

/* GET subscriptions listing. */
router.get('/', function(req, res, next) {
  res.json(subscriptions);
});

module.exports = router;
