var express = require("express");
var fs = require("fs");
var router = express.Router();

var usersFile = fs.readFileSync("./store/users.json");
users = JSON.parse(usersFile);

var propertiesFile = fs.readFileSync("./store/properties.json");
properties = JSON.parse(propertiesFile);

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json(users);
});

router.get("/properties", function(req, res, next) {
  res.json(properties);
});

// 1.1. All users from a particular city
//TODO

// - 1.3. All users from Free tier subscription which have more than 6 properties

router.get("/properties6", function(req, res, next) {
  var sixProperties = freeTier6Properties();
  res.json(sixProperties);
});

// - 1.4. All users from Premium tier subscription which have less than 4 properties

router.get("/properties4", function(req, res, next) {
  var fourProperties = premiumTier4Properties();
  res.json(fourProperties);
});

// 1.2. All users from a particular company (a user of a company is a user that has the same email domain.
// E.g for john@getproperly.com and company@getproperly.com "getproperly.com" is the email domain)

/*example http://localhost:3000/users/@acme.com */
router.get("/:emaildomain", function(req, res, next) {
  var emailD = searchEmail(req.params.emaildomain);
  res.json(emailD);
});

function searchEmail(emailDomain) {
  var usersEmail = [];
  for (i = 0; i < users.length; i++) {
    if (users[i].email.includes(emailDomain)) {
      usersEmail.push(users[i]);
    }
  }
  return usersEmail;
}

function freeTier6Properties() {
  var properties6 = [];
  var usersWith6 = [];
  for (i = 0; i < users.length; i++) {
    if (
      users[i].subscriptionId === "sub01" ||
      users[i].subscriptionId === "sub02"
    ) {
      for (j = 0; j < properties.length; j++) {
        if (properties[j].userId === users[i].id) {
          properties6.push(properties[i]);
          if (properties6.length > 6) {
            usersWith6.push(users[i]);
            properties6 = [];
          }
        }
      }
    }
  }
  return usersWith6;
}

function premiumTier4Properties() {
  var properties4 = [];
  var usersWith4 = [];
  for (i = 0; i < users.length; i++) {
    if (
      users[i].subscriptionId === "sub03" ||
      users[i].subscriptionId === "sub04"
    ) {
      for (j = 0; j < properties.length; j++) {
        if (properties[j].userId === users[i].id) {
          properties4.push(properties[i]);
        }
      }
      if (properties4.length < 4) {
        usersWith4.push(users[i]);
        properties4 = [];
      }
    }
  }
  return usersWith4;
}

module.exports = router;
