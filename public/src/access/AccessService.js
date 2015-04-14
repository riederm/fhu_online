(function() {
    'use strict';

    angular.module('fhu')
            .service('accessService', ['$q', '$http', accessService]);

    function accessService($q, $http) {
        var self = this;
        self.grantAccess = grantAccess;
        
        
        
        function grantAccess(resourceId, userId){
            var access = {
                userId : userId,
                resourceId : resourceId                
            };
            
            return $http.post('/access', access);
        }
    }

})();
