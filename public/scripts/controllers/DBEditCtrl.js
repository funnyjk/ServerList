angular.module('DBEditCtrl', ['ngRoute'])
  .controller('DBEditController', function ($scope, $routeParams, $location, ServerData) {
        $scope.server = null;
        $scope.database = null;
        $scope.isEdit = true;

        $scope.save = function () {
            $scope.server.$update(function(){
                $location.path('/');
            })
        };

        $scope.init = function () {
            $scope.server = ServerData.get({serverId: $routeParams.id}, function () {
                var start = -1;
                for (var x = 0; x < $scope.server.Databases.length; x++) {
                    if ($scope.server.Databases[x]._id === $routeParams.database) {
                        $scope.database = $scope.server.Databases[x];
                    }
                }
            });
        }

        $scope.init();
    });
