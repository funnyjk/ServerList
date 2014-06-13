var mongoose = require('mongoose'),
    async = require('async'),
    Server = mongoose.model('Server'),
    _ = require('underscore');

// Find server
exports.server = function(req, res, next, id) {
	Server.load(id, function(err, server) {
		if (err) return next(err);
		if (!server) return next(new Error('Failed to load client' + id));
		req.server = server;
		next();
	});
};

// Create Server
exports.create = function(req, res) {
	var server = new Server(req.body);
	
	server.save(function(err) {
		if (err) {
			return res.send('users/signup', {
				errors: err.errors,
				server: server
			});
		} else {
			res.jsonp(server);
		}
	});
};

// Delete a Server
exports.destroy = function(req, res) {
	var server = req.server;

	server.remove(function(err) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(server);
		}
	});
};

exports.update = function(req, res) { 
	var server = req.server;

	server = _.extend(server, req.body);
	
	server.save(function(err) {
		res.jsonp(server);
	});
};

// Show a Server
exports.show = function(req, res) {
	res.jsonp(req.server);
};

// Show all servers
exports.all = function(req, res) {
	Server.find().exec(function(err, servers) {
		if  (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(servers);
		}		
	});
};
