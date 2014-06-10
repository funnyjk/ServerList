// modules ====================================
var 	express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	mongoose = require('mongoose'),
	fs = require('fs');

// configuration ==============================

// config files
var db = require('./config/db');

var port = process.env.PORT || 8080
mongoose.connect(db.url);

app.configure( function () {
	app.use(express.static(__dirname + '/public'));		
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
});

// models ====================================
require('./models/models');

// routes ======================================
require('./routes/routes')(app);

// start app ==================================
app.listen(port);
console.log('Listening on Port: ' + port);
exports = module.exports.app;
