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
      url: '@'
    },
    templateUrl: 'templates/angular-social-count.html',
    link: function(scope, element, attr) {
      console.log(scope.url);
    },
    controller: function($scope) { 
    }
  };
}]);