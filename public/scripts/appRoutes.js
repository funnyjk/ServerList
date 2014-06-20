angular.module('appRoutes', [])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				css: 'styles/main.css'
			})
			.when('/server-add', {
				templateUrl: 'views/server.html',
				controller: 'ServerNewCtrl'
			})
			.when('/server-edit/:id', {
				templateUrl: 'views/server.html',
				controller: 'ServerEditCtrl'
			})
			.when('/server-delete/:id', {
				templateUrl: 'views/server.html',
				controller: 'ServerDeleteCtrl'
			})
			.when('/db-new/:id', {
				templateUrl: 'views/db.html',
				controller: 'DBNewController'
			})
			.when('/db-edit/:id/:database', {
				templateUrl: 'views/db.html',
				controller: 'DBEditController'
			})
			.when('/db-delete/:id/:database', {
				templateUrl: 'views/db.html',
				controller: 'DBDeleteController'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				css: 'styles/about.css'
			})
			.when('/contact', {
				templateUrl: 'views/contact.html'
			})
	}]);
