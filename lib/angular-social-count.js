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
        if ( url != null && angular.isDefined(url) && url != "") {
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
            if ( angular.isDefined($scope.errorCallback) ) {
              $scope.errorCallback(err);
            }
          }); 
        }
      });

      var getFacebookLikeCount = function(data) {
        if ( angular.isDefined(data) && angular.isDefined(data[0]) ) {
          $scope.count = data[0].like_count;
        } else {
          $scope.count = 0;
        }
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
        if ( url != null && angular.isDefined(url) && url != "") {
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
            if ( angular.isDefined($scope.errorCallback) ) {
              $scope.errorCallback(err);
            }
          }); 
        }
      });

      var getFacebookShareCount = function(data) {
        if ( angular.isDefined(data) && angular.isDefined(data[0]) ) {
          $scope.count = data[0].share_count; 
        } else {
          $scope.count = 0;
        }
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
        if ( url != null && angular.isDefined(url) && url != "") {
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
            if ( angular.isDefined($scope.errorCallback) ) {
              $scope.errorCallback(err);
            }
          }); 
        }
      });

      var getFacebookCommentCount = function(data) {
        if ( angular.isDefined(data) && angular.isDefined(data[0]) ) {
          $scope.count = data[0].comment_count; 
        } else {
          $scope.count = 0;
        }
      }
    }
  };
}]);

ngSocialCount.directive('ngTwShareCount', [ '$http', function($http) {
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
        if ( url != null && angular.isDefined(url) && url != "") {
          $.ajax({
            url: "http://cdn.api.twitter.com/1/urls/count.json?url="+url,
            dataType: "jsonp",
            success: function (data) {
              $scope.count = data.count;
            }
          });
        }
      });
    }
  };
}]);

ngSocialCount.directive('ngPnShareCount', [ '$http', function($http) {
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
      $scope.getPinterestShareCount = function(data) {
        if ( angular.isDefined(data) ) {
          $scope.count = data.count; 
        } else {
          $scope.count = 0;
        }
      }

      $scope.$watch("url", function(url){
        if ( url != null && angular.isDefined(url) && url != "") {
          $.ajax({
            url: "http://api.pinterest.com/v1/urls/count.json?url="+url,
            dataType: "jsonp",
            success: function (data) {
              $scope.count = data.count; 
            }
          });
        }
      });
    }
  };
}]);

ngSocialCount.directive('ngLnShareCount', [ '$http', function($http) {
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
        if ( url != null && angular.isDefined(url) && url != "") {
          $.ajax({
            url: "http://www.linkedin.com/countserv/count/share?url="+url,
            dataType: "jsonp",
            success: function (data) {
              $scope.count = data.count;
            }
          });
        }
      });
    }
  };
}]);