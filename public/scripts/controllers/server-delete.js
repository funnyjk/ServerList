'use strict';

angular.module('SeverListApp')
	.controller('ServerDeleteCtrl', function ($scope, $routeParams, $location, ServerData) {
	//	$scope.server = null;
		$scope.isEdit = false;

		$scope.init = function() {
			$scope.server = ServerData.get({serverId: $routeParams.id}, function(){
				$scope.server.$remove(function(){
					$location.path('/');
				})
			});
		};
		$scope.init();
	});
