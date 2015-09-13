(function() {
    'use strict';

    angular.module('fhu')
            .service('accessService', ['$q', '$http', accessService]);

    function accessService($q, $http) {
        var self = this;
        
        self.grantAccess = grantAccess;
        self.getAccessOf = getAccessOf;
        self.removeAccess = removeAccess;
        
        
        function grantAccess(resourceId, userId){
            var access = {
                userId : userId,
                resourceId : resourceId                
            };
            
            return $http.post('/access', access);
        }
        
        function getAccessOf(lessonId){
            return $http.get('/access', {resourceId : lessonId});
        }
        
        function removeAccess(id) {
            return $http.delete('/access/' + id);
        }
        
    }

})();
