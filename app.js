(function () {
  'use strict';

  angular.module('FirstApp',[])
  .controller('LunchCheck',LunchCheck);

  LunchCheck.$inject = ['$scope'];
  function LunchCheck($scope) {
    $scope.lunchMenu = "menu";
    $scope.sayMessage = function (){
      return "Enjoy!";
    }

    $scope.checkIfTooMuch = function(){
    }
  }
})
