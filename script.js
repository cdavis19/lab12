var app = angular.module('myModule', []);


app.controller('myController', function($scope){
  $scope.lists = ['finish lab', 'grocery shop', 'laundry', 'drink a beer'];


      $scope.add = function() {
         $scope.lists.push($scope.item);
      }


      $scope.removeItem = function(index){
      $scope.lists.splice(index, 1);
    }


});
