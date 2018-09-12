var express = require("express");
var fs = require("fs");

var Moment = require("moment"),
  MomentRange = require("moment-range"),
  moment = MomentRange.extendMoment(Moment);
var router = express.Router();

var bookings;
fs.readFile("./store/bookings.json", "utf8", function(err, data) {
  if (err) throw err;
  bookings = JSON.parse(data);
});

/* GET bookings listing. */
router.get("/", function(req, res, next) {
  res.json(bookings);
});

//  - 2.1. All bookings for a **given period** (start and end dates).

/*example http://localhost:3000/bookings/2018-02-24&2018-03-18 */
router.get("/:startdate&:enddate", function(req, res, next) {
  var bookingsBetweenRange = isBetweenDates(
    req.params.startdate,
    req.params.enddate
  );
  res.json(bookingsBetweenRange);
});

// - 2.2. All bookings longer or equal to 25 days.

/* GET bookings longer or equal to 25 days. */
router.get("/bookings25", function(req, res, next) {
  res.json(bookingsWith25Days());
});

// - 2.3. All bookings shorter or equal to 3 days.

/* GET bookings shorter or equal to 3 days. */
router.get("/bookings3", function(req, res, next) {
  res.json(bookings);
});

// - 2.4. All Properties with Bookings with 1 day or less between bookings

function bookingsWith25Days() {
  var bookingsOverAndEqual25 = []
  for (var i = 0; i < bookings.length; i++) {
    var startDate = moment(bookings[i].startDate);
    var endDate = moment(bookings[i].endDate);
    console.log(startDate);
    console.log(endDate);
    console.log(Math.abs(startDate.diff(endDate, 'days'))+1);
    var numberOfDays = Math.abs(startDate.diff(endDate, 'days'))+1;
    console.log(numberOfDays);
    if(numberOfDays >= 25)
    {
      bookingsOverAndEqual25.push(bookings[i]);
    }
  }
  return bookingsOverAndEqual25;
}

function isBetweenDates(startDate, endDate) {
  sDate = moment(startDate);
  eDate = moment(endDate);

  bookingBetweenRange = [];

  for (var i = 0; i < bookings.length; i++) {
    var bookingStartDate = moment(bookings[i].startDate);
    var bookingEndDate = moment(bookings[i].endDate);

    if (bookingStartDate >= sDate && bookingEndDate <= eDate) {
      bookingBetweenRange.push(bookings[i]);
    }
  }
  return bookingBetweenRange;
}

// Illustration:
//
// startdate                          enddate
// v                                        v
// #----------------------------------------#
//
//         #----------------------#
//         ^                      ^
//         startD              endD



//     2.1.a - The bookings returned should have the startDate and endDate formated to dd/MM/YYYY HH:mm
//     using the property timeZone.

//     2.1.b - The **given period** is also provided in the Property timeZone.

// - 2.2. All bookings longer or equal to 25 days.

// - 2.3. All bookings shorter or equal to 3 days.

// - 2.4. All Properties with Bookings with 1 day or less between bookings

// - 2.5. With the functions created expose them in a restful application and create a dashboard (simple UI) to display the results

module.exports = router;
