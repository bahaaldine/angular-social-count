'use strict';

var ngOdometer = angular.module('ngOdometer', []);

ngOdometer.directive('ngOdometer', function () {
  return {
    restrict: 'E',
    scope : {
      endValue : '=value'
    },
    link: function(scope, element) {
      // If you want to change the format, you have to add the necessary
      //  parameters. In this case I am going with the defaults.
      var od = new Odometer({
          el : element[0],
          value : 0,   // default value
          format: '( ddd).dddd'   // default value
      });
      // update the odometer element when there is a 
      // change in the model value.
      scope.$watch('endValue', function() {
        od.update(scope.endValue);
      });
    }
  };
});