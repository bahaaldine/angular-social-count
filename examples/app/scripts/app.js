'use strict';

/**
 * @ngdoc overview
 * @name examplesApp
 * @description
 * # examplesApp
 *
 * Main module of the application.
 */
angular
  .module('examplesApp', [
    'ngResource',
    'ngRoute',
    'ngFastI18n',
    'hljs',
    'ngFontChart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
