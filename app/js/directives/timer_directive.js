'use strict';

module.exports = function(app) {

  app.directive('timerDirective', function() {
    return {
      restrict: 'EA',
      replace: true,
      controller: 'BrewController',
      templateUrl: 'views/directives/timer.html',
       scope: {
        start: '=',
        stop: '=',
      },
      transclude: true
    };
  });

};
