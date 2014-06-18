angular.module('MainCtrl', [])
	.controller('MainCtrl', function ($scope, ServerData, modalService) {
		
		$scope.showAll = false;
   		$scope.showAllToggle = function () {
       			$scope.showAll = !$scope.showAll;
		};
	
		$scope.toggleHide = function (server) {
			var indx = $scope.servers.indexOf(server);
		$scope.servers[indx].listShow = !$scope.servers[indx].listShow;
		};
		$scope.searchField = "";		

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
		
		$scope.dbModal = function (srv, db) {
			var modalOptions = {
				closeButtonText: 'Close',
				headerText: db.DBName,
				bodyText: srv.VHDName,
			};
			modalService.showModal({}, modalOptions) 
		}
		
$scope.check = function (server) {
        if (server.listShow == true) {
        return "col-xs-12 col-sm-12 col-md-12 col-lg-12";
        } else {
        return "col-xs-12 col-sm-6 col-md-4 col-lg-3";
        };
//var year = server.VHDName[4] + server.VHDName[5] + server.VHDName[6] + server.VHDName[7];
//    	if(year == 2013) {
//		return "btn btn-info";
//	} else if (year == 2014) {
//		return "bold";
//	} else {
//		$scope.searchField =  year;
//	}
	};
    $scope.selectedIndex = "";
    

		$scope.init = function(){
			$scope.servers = ServerData.query();
			$scope.headCollapse = false;	
		};
		
		$scope.init();
	});
