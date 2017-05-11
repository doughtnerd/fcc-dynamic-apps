//Library imports
var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var sass = require('node-sass-middleware');

//Routing module import
var routes = require("./server/routes/routes.js");

//Create app
var app = express();

//Set view engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/client/');
app.set('view options', {
    layout: false
});

//Set sass middleware
app.use(
     sass({
         src: __dirname + '/server/sass', 
         dest: __dirname + '/client/css',
         debug: false,       
     })
  ); 

//Set static location
app.use(express.static(__dirname + '/client'));

//Route traffic
routes(app);

//Listen
app.listen(process.env.PORT || 8080);