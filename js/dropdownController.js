var app = angular.module("dropdownApp");


app.directive("dropdown", [function() {
  return {
    restrict: 'E',
    scope: {
      dropdownListItems: "=items"
    },
    templateUrl: '/directives/dropdown-directive.html',
    controller: ["$scope", "dropdownService", function($scope,
      dropdownService) {
      // $scope.dropdownData = dropdownService.data;
      // dropdownService.getItems();
      $scope.showPopup = false;
      $scope.dditem = "Dropdown";
      $scope.onClickItem = function(item) {
        $scope.dditem = item;
      }
      $scope.onClickDD = function() {
        $scope.showPopup = !$scope.showPopup;
      }
    }]
  };
}]);

app.controller("BodyCtrl", ["$scope", function($scope) {
  $scope.itemList = ["aa", "bb"];
}]);

app.factory("dropdownService", ["$http", function($http) {
  var dropdownService = {
    data: {
      items: []
    },
    getItems: function() {
      return $http.get('items.json').success(function(data) {
        dropdownService.data.items = data.items;
      });
    }
  };
  return dropdownService;
}]);
