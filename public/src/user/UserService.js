(function() {
    'use strict';

    angular.module('courses')
            .service('userService', ['$q', '$http', userService]);

    function userService($q, $http) {
        var self = this;
        self.login = doLogin;
        self.sessionId = "";
        self.logout = doLogout;
        self.isLoggedIn = false;
        
        self.displayName = "";
        self.isLoggedIn = false;
        self.fetchCurrentUser = fetchCurrentUser;
        
        function doLogin(username, password) {
            return $http.post('/users/login', {
                username: username,
                password: password
            });
        }
        
        function successFullLogin(displayName){
            self.displayName = displayName;
        }
        
        function doLogout(){
            return $http.post('/users/logout');
        }
        
        function fetchCurrentUser(){
            return $http.get('/users/me');
        }
    }

})();
