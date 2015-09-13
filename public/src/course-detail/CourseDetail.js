(function(){
  'use strict';

  // Prepare the 'courses' module for subsequent registration of controllers and delegates
 // angular.module('fhu', [ 'ngMaterial', 'youtube-embed' ]);
  angular.module('fhu').run(['amMoment', function(amMoment) {
            amMoment.changeLocale('de');
        }]);

})();
