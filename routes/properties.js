var express = require('express');
var fs = require('fs');
var router = express.Router();
var moment = require("moment");

var properties;
fs.readFile('./store/properties.json', 'utf8', function (err, data) {
  if (err) throw err;
  properties = JSON.parse(data);
});

var bookings;
fs.readFile('./store/bookings.json', 'utf8', function (err, data) {
  if (err) throw err;
  bookings = JSON.parse(data);
});

/* GET properties listing. */
router.get('/', function(req, res, next) {
  res.json(properties);
});


// - 2.4. All Properties with Bookings with 1 day or less between bookings



/* GET All Properties with Bookings with 1 day or less between bookings. */
router.get('/propertiesbookings1', function(req, res, next) {
  res.json(propertiesWithBookings1DayBetween());
});

// 
//
//                startdate  enddate
//                        v  v
//                        #--#
//
//         #--------------#  #--------------#
//         ^              ^  ^              ^
//         startD1    endD1  startD2         endD2
//         booking one       booking two

// var endDate = moment(bookings[i].endDate);
// var numberOfDays = Math.abs(startDate.diff(endDate, "days"));
// if (numberOfDays >= 25) {

function propertiesWithBookings1DayBetween() {
  console.log('asdasdasd');
  for(i = 0; i < bookings.length; i++) {
    var firstBookingEndDate = moment(bookings[i].endDate);
    console.log(firstBookingEndDate);
    for(j = 0; j < bookings.length; j++)
    {
      var startDateCheck = moment(bookings[i].startDate);
      var daysBetween = Math.abs(startDateCheck.diff(firstBookingEndDate, "days"));
      console.log(daysBetween);
      if(daysBetween <= 1){
        console.log('asdasfasdgasdgfsadgf');
        return bookings[j];
      }
    }
  }
  // get one booking then check its end date against all other bookings
  // if the days are 1 or less 
  // get the property id
  // get property by id
  //
}

// [
//   {
//       "id": "iua7869",
//       "userId": "kua876",
//       "title": "Nomads Apartment - 1",
//       "location": [
//           -36.845919,
//           174.767400
//       ],
//       "type": "Apartment",
//       "numberOfRooms": 3,
//       "timeZone": "Pacific/Auckland"
//   },


// [
//   {
//       "id": "ksi7272",
//       "propertyId": "iua7869",
//       "startDate": "2018-02-15T12:00:00.000Z",
//       "endDate": "2018-02-24T12:00:00.000Z"
//   },



module.exports = router;
