var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.use(function () {}) //added to all paths or globally

app.get('/bookings', function(req, res) {
    res.json()
}) //added to a specific path