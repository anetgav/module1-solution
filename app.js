(function () {
'use strict';

angular.module('MyApp', [])
.controller('LunchCheck', LunchCheck);

LunchCheck.$inject = ['$scope'];
function LunchCheck($scope) {
var countC = 0;

$scope.checkIfTooMuch = function () {
  if (!$scope.lunchMenu){
    $scope.sayMessage = "Enter menu";
  } else {
   countC = $scope.lunchMenu.split(',').length;
  }

  if (countC == 0) {
    $scope.sayMessage = "Enter menu";
  } else if (countC < 4) {
    $scope.sayMessage = "Enjoy";
} else {
  $scope.sayMessage = "Too much";
}
  };
}

})();
