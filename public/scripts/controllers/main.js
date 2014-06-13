'use strict';

angular.module('ServerListApp')
	.controller('MainCtrl', function ($scope, $location, $filter, ServerData) {
		$scope.serverCreationString = "";
		$scope.databaseCreationString = "";
		$scope.userCreationSring = "";
		$scope.activeServers = [];
		$scope.inactiveServers = [];
		$scope.servers = [];
		$scope.editMode = false;

		$scope.addServer = function(){
			var server = new ServerData({VHDName: $scope.serverCreationString});

			server.$save(function(){
				$scope.serverCreationString = '';
				$scope.servers = ServerData.query();
			});
		};
		
		$scope.addDB = function(id){
			var server = ServerData.get({serverId: id}, function(){
				if(!server.Databases){
					server.Databases = [];
				}
				server.Databases.push({DBName: $scope.databaseCreationString});
				server.$update(function(){
					$scope.servers = ServerData.query();
				})
			});
		};

		$scope.deleteDB = function(id, index){
			var server = ServerData.get({serverId: id}, function(){
				server.Database.splice(index, 1);
				server.$update(function(){
					$scope.servers = ServerData.query();
				})
			});
		} 
		
		$scope.saveAll = function(){
			angular.forEach($scope.servers, function(server){
				server.$update(function(){
					$scope.init();
				});
			})
		}	
		
		$scope.filterServers = function() {
			function filterActiveServers(servers) {
				return $filter('filter')(servers, function(server) {
					var matchesFilter = server.Databases.length > 0;
					return matchesFilter;
				});
			}
			function filterInactiveServers(servers) {
				return $filter('filter')(servers, function(server) {
					var matchesFilter = server.Databases.length < 1;
				});
			}
			$scope.activeServers = filterActiveServers($scope.servers);
			$scope.inactiveServers = filterInactiveServers($scope.servers);
		};
		
		$scope.init = function(){
			$scope.servers = ServerData.query(function(){
				$scope.filterServers();
			});
		};
		
		$scope.init();
	});
