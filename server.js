var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8080;



var question = [
  {
    question:"You like the Walking Dead."
  },
  {
    question:"You like World of Warcraft."
  },
  {
    question:"You crossfit."
  },
  {
    question:"You drink."
  },
  {
    question:"You think fedoras are cool."
  },
  {
    question:"You think cargo shorts are acceptable."
  },
  {
    question:"People from Texas are cool."
  },
  {
    question:"Not tipping is fine."
  },
  {
    question:"Going to college is necessery."
  },
  {
    question:"Programmers are sexy."
  }
];




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});





