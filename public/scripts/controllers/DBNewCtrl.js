angular.module('DBNewCtrl', ['ngRoute'])
  .controller('DBNewController', function ($scope, $routeParams, $location, ServerData) {
        $scope.server = null;
        $scope.database = {DBName: ''};
        $scope.isEdit = false;

        $scope.save = function () {
            if(!$scope.server.Databases){
                $scope.server.Databases = [];
            }
            $scope.server.Databases.push($scope.database);
            $scope.server.$update(function(){
                $location.path('/');
            })
        };

        $scope.init = function () {
            $scope.server = ServerData.get({serverId: $routeParams.id});
        }

        $scope.init();
    });
