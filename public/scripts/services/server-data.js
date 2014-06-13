'use strict';

angular.module('ServerListApp')
	.factory('ServerData', function($resource, $http) {
		return $resource('servers/:serverId', { serverId: '@_id' }, {
			 'update': { method: 'PUT' }
		});
	});
