/*! angular-social-count - v0.0.0 - 2014-10-07
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
angular.module('templates/angular-social-count.html', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/angular-social-count.html',
    "<div class=\"upload-button\">\n" +
    "\t<button class=\"{{buttonClass}}\" lng=\"{{label}}\"></button>\n" +
    "\t<input type=\"file\" ng-file-select=\"onFileSelect($files, index)\"></input>\n" +
    "</div>"
  );

}]);
