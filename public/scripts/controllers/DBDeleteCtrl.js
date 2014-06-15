angular.module('DBDeleteCtrl', ['ngRoute'])
    .controller('DBDeleteController', function ($scope, $routeParams, $location, ServerData) {
        $scope.server = null;
        $scope.isEdit = false;

        $scope.save = function () {
        };

        $scope.init = function () {
            $scope.server = ServerData.get({serverId: $routeParams.id}, function () {
                var start = -1;
                for (var x = 0; x < $scope.server.Databases.length; x++) {
                    if ($scope.server.Databases[x]._id === $routeParams.database) {
                        start = x;
                    }
                }
                if(start >= 0){
                    $scope.server.Databases.splice(start, 1);
                    $scope.server.$update(function(){
                        $location.path('/');
                    })
                }
            });
        }

        $scope.init();
    });
