var express = require('express');
var fs = require('fs');

var 
   Moment = require("moment"),
   MomentRange = require("moment-range"), 
   moment = MomentRange.extendMoment(Moment);
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

router.get("/:startdate&:enddate", function(req, res, next) {
  var bookingsBetweenRange = isBetweenDates(req.params.startdate, req.params.enddate)
  res.json(bookingsBetweenRange);
});

// "startDate": "2018-03-10T12:00:00.000Z",
// "endDate": "2018-03-18T12:00:00.000Z"


function isBetweenDates(startDate, endDate) {
  console.log(startDate);
  console.log(endDate);
  console.log('2018-03-12T00:00:00.000')

  const range = moment.range(startDate, endDate);

  var bookingdate = moment('2018-03-12T00:00:00.000');
  bookingdate.within(range);
  console.log(bookingdate.within(range));
  console.log(range);
}


//  - 2.1. All bookings for a **given period** (start and end dates).
 
//     2.1.a - The bookings returned should have the startDate and endDate formated to dd/MM/YYYY HH:mm 
//     using the property timeZone. 
    
//     2.1.b - The **given period** is also provided in the Property timeZone.

// - 2.2. All bookings longer or equal to 25 days.

// - 2.3. All bookings shorter or equal to 3 days.

// - 2.4. All Properties with Bookings with 1 day or less between bookings

// - 2.5. With the functions created expose them in a restful application and create a dashboard (simple UI) to display the results


module.exports = router;
