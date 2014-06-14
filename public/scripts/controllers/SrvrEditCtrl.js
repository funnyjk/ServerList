angular.module('SrvrEditCtrl', ['ngRoute'])
	.controller('ServerEditCtrl', function($scope, $routeParams, $location, ServerData) {
		$scope.server = null;
		$scope.isEdit = true;
		
		$scope.save = function(){
			$scope.server.$update(function(){
				$location.path('/');
			});
		};
		
		$scope.init = function(){
			$scope.server = ServerData.get({serverId: $routeParams.id});
		}
		
		$scope.init();
	});
