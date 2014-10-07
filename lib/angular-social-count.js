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

ngSocialCount.directive('ngFbShareCount', [ '$http', function($http) {
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
            , url: 'https://api.facebook.com/method/fql.query?callback=getFacebookShareCount'
            , params: {
              query: 'SELECT share_count FROM link_stat WHERE url="'+url+'"',
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

      var getFacebookShareCount = function(data) {
        $scope.count = data[0].share_count;
      }
    }
  };
}]);

ngSocialCount.directive('ngFbCommentCount', [ '$http', function($http) {
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
            , url: 'https://api.facebook.com/method/fql.query?callback=getFacebookCommentCount'
            , params: {
              query: 'SELECT comment_count FROM link_stat WHERE url="'+url+'"',
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

      var getFacebookCommentCount = function(data) {
        $scope.count = data[0].comment_count;
      }
    }
  };
}]);