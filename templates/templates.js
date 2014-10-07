angular.module('templates/angular-social-count.html', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/angular-social-count.html',
    "<div class=\"social-count\">\n" +
    "\t<ng-odometer ng-show=\"count\" class=\"count\" value=\"count\"></ng-odometer>\n" +
    "</div>"
  );

}]);
