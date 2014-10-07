'use strict';

angular.module("angular-social", ["templates/angular-s3-upload-button.html"]);
var ngSocialCount = angular.module('angular-social-count', ["angular-social-count-tpls"]);
ngSocialCount.directive('ngSocialCount', [ '$http', function($http) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
    },
    templateUrl: 'templates/angular-social-count.html',
    link: function(scope, element, attr) {

    },
    controller: function($scope) { 
    }
  };
}]);

ngSocialCount.directive('ngFbLikeCount', [ '$http', function($http) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      url: '@',
      errorCallback: '='
    },
    templateUrl: 'templates/angular-social-count.html',
    link: function(scope, element, attr) {
       
    },
    controller: function($scope) { 
      $scope.$watch("url", function(url){
        if ( url != null && typeof url != "undefined" && url != "") {
          $http({
            method: 'GET'
            , url: 'https://api.facebook.com/method/fql.query?callback=getFacebookLikeCount'
            , params: {
              query: 'SELECT like_count FROM link_stat WHERE url="'+url+'"',
              format: 'JSON'
            }
          }).then(function(data) {
            eval(data.data);
          }, function(err){
            if ( typeof $scope.errorCallback != "undefined" ) {
              $scope.errorCallback(err);
            }
          }); 
        }
      });

      var getFacebookLikeCount = function(data) {
        $scope.count = data[0].like_count;
      }
    }
  };
}]);