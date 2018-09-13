var express = require("express");
var fs = require("fs");
var router = express.Router();
var moment = require("moment-timezone");

var properties;
fs.readFile("./store/properties.json", "utf8", function(err, data) {
  if (err) throw err;
  properties = JSON.parse(data);
});

var bookings;
fs.readFile("./store/bookings.json", "utf8", function(err, data) {
  if (err) throw err;
  bookings = JSON.parse(data);
});

/* GET properties listing. */
router.get("/", function(req, res, next) {
  res.json(properties);
});

// - 2.4. All Properties with Bookings with 1 day or less between bookings

/* GET All Properties with Bookings with 1 day or less between bookings. */
router.get("/propertiesbookings1", function(req, res, next) {
  res.json(propertiesWithBookings1DayBetween());
});

//                startdate  enddate
//                        v  v
//                        #--#
//
//         #--------------#  #--------------#
//         ^              ^  ^              ^
//         startD1    endD1  startD2         endD2
//         booking one       booking two

function propertiesWithBookings1DayBetween() {
  var propertiesWithBookings1DayBetweenArray = [];

  for (x = 0; x < properties.length; x++) {
    for (i = 0; i < bookings.length; i++) {
      if (properties[x].id === bookings[i].propertyId) {
        var firstBookingEndDate = moment.tz(
          bookings[i].endDate,
          properties[x].timeZone
        );
        for (j = 0; j < bookings.length; j++) {
          if (properties[x].id === bookings[j].propertyId) {
            var startDateCheck = moment.tz(
              bookings[j].startDate,
              properties[x].timeZone
            );
            var daysBetween = Math.abs(
              startDateCheck.diff(firstBookingEndDate, "days")
            );
            if (daysBetween <= 1) {
              propertiesWithBookings1DayBetweenArray.push(properties[x]);
            }
          }
        }
      }
    }
  }
  return propertiesWithBookings1DayBetweenArray;
}

module.exports = router;
