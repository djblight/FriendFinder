// npm packages for functionality
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express configuration sets up properties
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Points our server to route files.

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Listener and this starts the server
app.listen(PORT, function() {

  console.log("App listening on PORT: " + PORT);

});

