/*! angular-social-count - v0.0.2 - 2014-10-07
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
      console.log(scope.url);
    },
    controller: function($scope) { 
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
