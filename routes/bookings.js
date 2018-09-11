var express = require('express');
var fs = require('fs');
var router = express.Router();

var bookings;
fs.readFile('./store/bookings.json', 'utf8', function (err, data) {
  if (err) throw err;
  bookings = JSON.parse(data);
});



/* GET bookings listing. */
router.get('/', function(req, res, next) {
  res.json(bookings);
});

router.get('/new', function(req, res, next) {
    console.log(bookings);
    res.json(bookings);
})
module.exports = router;
