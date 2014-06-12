'use strict';

angular.module('ServerListApp')
	.controller('ServerNewCtrl', function($scope, $location, ServerData) {
		$scope.server = {VHDName: '';};
		$scope.isEdit = false;
	
		$scope.save = function() {
			var server = new ServerData($scope.server);

			server.$save(function(){
				$location.path('/');
			});
		}
	});
