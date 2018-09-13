function bookingsLessEqual3() {
  var bookingsOLessEqual3 = [];
  for (var i = 0; i < bookings.length; i++) {
    var startDate = moment(bookings[i].startDate);
    var endDate = moment(bookings[i].endDate);
    var numberOfDays = Math.abs(startDate.diff(endDate, "days"));
    if (numberOfDays <= 3) {
      bookingsOLessEqual3.push(bookings[i]);
    }
  }
  return bookingsOLessEqual3;
}

function bookingsWith25Days() {
  var bookingsOverAndEqual25 = [];
  for (var i = 0; i < bookings.length; i++) {
    var startDate = moment(bookings[i].startDate);
    var endDate = moment(bookings[i].endDate);
    var numberOfDays = Math.abs(startDate.diff(endDate, "days"));
    if (numberOfDays >= 25) {
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