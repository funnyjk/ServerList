angular.module('SrvrEditCtrl', ['ngRoute'])
	.controller('ServerEditCtrl', function($scope, $routeParams, $location, ServerData, modalService) {
		$scope.server = null;
		$scope.isEdit = true;
		
		$scope.save = function(){
			$scope.server.$update(function(){
				$location.path('/');
			});
		}

                $scope.deletePrompt = function () {
                        var modalOptions = {
                                closeButtonText: 'Close',
                                headerText: 'Delete?',
				bodyText: 'Are you sure?'
                        };
                        modalService.showModal({}, modalOptions)
                }
	
		$scope.addAlert = function() {
		    $scope.alerts.push({type: 'danger', msg: 'ARE YOU SURE?!'});
		  };

		  $scope.closeAlert = function(index) {
		    $scope.alerts.splice(index, 1);
		  };
	
		$scope.init = function(){
			$scope.server = ServerData.get({serverId: $routeParams.id});
		}
		
		$scope.init();
	});
