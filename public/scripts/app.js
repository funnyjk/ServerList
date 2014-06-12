'use strict';

angular.module('ServerListApp', ['ngResource', 'ui.bootstrap'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/add-server', {
				templateUrl: 'views/server.html',
				controller: 'ServerNewCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
