var express = require("express");
var fs = require("fs");
var router = express.Router();
var NodeGeocoder = require("node-geocoder");

var users;
fs.readFile("./store/users.json", "utf8", function (err, data) {
  if (err) throw err;
  users = JSON.parse(data);
});

var geocoder = require("local-reverse-geocoder");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

// 1.1. All users from a particular city


// 1.2. All users from a particular company (a user of a company is a user that has the same email domain.
// E.g for john@getproperly.com and company@getproperly.com "getproperly.com" is the email domain)

router.get("/:emaildomain", function (req, res, next) {
  var emailD = searchEmail(req.params.emaildomain);
  res.json(emailD);
});

function searchEmail(emailDomain) {
  // for each email
  // get string after @
  // if it matchs provided string
  // return it
  var usersEmail = [];
  for (i = 0; i < users.length; i++) {
    if (users[i].email.includes(emailDomain)) {
      usersEmail.push(users[i]);
    }
  }
  return usersEmail;
}


// - 1.3. All users from Free tier subscription which have more than 6 properties

router.get("/properties6", function (req, res, next) {
  var sixProperties = freeTier6Properties();
  res.json(sixProperties);
});

//
var properties;
fs.readFile("./store/properties.json", "utf8", function (err, data) {
  if (err) throw err;
  properties = JSON.parse(data);
});

function freeTier6Properties() {
  var properties6 = []
  for (i = 0; i < users.length; i++) {
    if (users[i].subscriptionId === "sub01" || users[i].subscriptionId === "sub02") {
      for (j = 0; j < properties.length; j++) {
        if (properties[i].userID === users[i].id) {
          properties6.push(properties[i]);
        }
      }
    }
  }
  if (properties6.length > 6) {
    return properties6;
  }
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
//       "id": "kua876",
//       "name": "John Snow",
//       "email": "john@acme.com",
//       "location": [
//           -36.847610,
//           174.767379
//       ],
//       "subscriptionId": "sub01"
//   },

module.exports = router;
