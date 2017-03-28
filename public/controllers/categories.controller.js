angular.module('kB')

.controller('CategoriesCtrl', ['$scope', '$http', function($scope, $http){
  $http({
          method: 'GET',
          url: '/categories',   // your remote url
          responseType: "json"
      }).
       then(function successCallback(response) {
           //your code when success
           $scope.categories = response.data;
      }, function errorCallback(response) {
          //your code when fails
      });
}])
