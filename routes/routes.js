var async = require('async');

module.exports = function(app) {
	
// Backend Routes =======================================
	var servers = require('../api/mongoose');
	app.get('/servers', servers.all);
	app.get('/servers/:serverId', servers.show);
	app.post('/servers', servers.create);
	app.put('/servers/:serverId', servers.update);	
	app.del('/servers/:serverId', servers.destroy);

	// Parameters
	app.param(':serverId', servers.server);

// Frontend Routes ======================================
	app.get('/test', function(req, res) {
		res.send('TEST DATA');
	});	
	app.get('/graph', function(req, res) {
		res.sendfile('./public/graph.html');
	});
	app.get('/404', function(req, res) {
		res.send('404 Error: PAGE NOT FOUND');
	});
	app.get('*', function(req, res) {
		res.sendfile('./public/404.html');
	});
};
