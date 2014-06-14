angular.module('SrvrNewCtrl', [])
	.controller('ServerNewCtrl', function($scope, $location, ServerData) {
		$scope.server = {VHDName: ''};
		$scope.isEdit = false;
	
		$scope.save = function() {
			var server = new ServerData($scope.server);
			
			$scope.test = "hello";
			
			server.$save(function(){
				$location.path('/');
			});
		}
	});
