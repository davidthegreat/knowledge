angular.module('kB')

.controller('ArticlesCtrl', ['$scope', '$http', function($scope, $http){
$http.get('/articles').then(successCallback, errorCallback);
function successCallback(response){
      //success code
      //console.log(response);
      $scope.articles = response.data;
  }
  function errorCallback(error){
      //error code
      console.log(error);
  }
}])

.controller('ArticlesCategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get('/articles/category/' + $routeParams.category).then(successCallback, errorCallback);
function successCallback(response){
      //success code
      // console.log(response);
      $scope.cat_articles = response.data;
      $scope.category = $routeParams.category;
      //console.log($scope.category);
  }
  function errorCallback(error){
      //error code
      console.log(error);
  }
}])

.controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
$http.get('/articles/'+$routeParams.id).then(successCallback, errorCallback);
function successCallback(response){
      //success code
      //console.log(response);
      $scope.article = response.data;
  }
  function errorCallback(error){
      //error code
      console.log(error);
  }
}])
