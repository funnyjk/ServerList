angular.module('ServerDataService', ['ngResource', 'ngRoute']).factory('ServerData', ['$resource', function($resource) {
		return $resource('servers/:serverId', { serverId: '@_id' }, {
			 'update': { method: 'PUT' }
		});
	}]);
