angular.module('appRoutes', [])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/add-server', {
				templateUrl: 'views/server.html',
				controller: 'ServerNewCtrl'
			})
			.when('/edit-server/:id', {
				templateUrl: 'views/server.html',
				controller: 'ServerEditCtrl'
			})
			.when('/delete-server/:id', {
				templateUrl: 'views/server.html',
				controller: 'ServerDeleteCtrl'
			});
	}]);
