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
    'ngOdometer',
    'angular-social-count'
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
