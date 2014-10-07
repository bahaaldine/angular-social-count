/*! angular-social-count - v0.0.5 - 2014-10-07
* Copyright (c) 2014 ; Licensed  */
  /*! angular-facebook-insight - v0.6.1 - 2014-07-13
* Copyright (c) 2014 ; Licensed  */
'use strict';

var page_id = 0;

angular.module("angular-social-count-tpls", 
  ["templates/angular-social-count.html"]);
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
       
    },
    controller: function($scope) { 
      $scope.$watch("url", function(url){
        if ( url != null ) {
          $http({
            method: 'GET'
            , url: 'https://api.facebook.com/method/fql.query?callback=getFacebook'
            , params: {
              query: 'SELECT like_count FROM link_stat WHERE url="'+url+'"',
              format: 'JSON'
            }
          }).then(function(data) {
            console.log(data);
            eval(data.data);
          }, function(err){
            console.log(data);
          }); 
        }
      });

      $scope.getFacebookLikeCount = function(data) {
        console.log(data)
      }
    }
  };
}]);
angular.module('templates/angular-social-count.html', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/angular-social-count.html',
    "<div class=\"social-count\">\n" +
    "\t<ng-odometer ng-show=\"count\" class=\"count\" value=\"count\"></ng-odometer>\n" +
    "</div>"
  );

}]);
