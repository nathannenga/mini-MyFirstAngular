angular.module('friendsList', [])
  .controller('mainCtrl', ['$scope', function($scope){
    $scope.message = "hola friends";
    $scope.friends =["Luke", "alex", "carolyn","anna"]
    $scope.addFriend = function(name){
      $scope.friends.push(name);

    }
  }]);
