(function() {
    'use strict';

    angular.module('fhu')
            .service('userService', ['$q', '$http', userService]);

    function userService($q, $http) {
        var self = this;
        self.login = doLogin;
        self.sessionId = "";
        self.isLoggedIn = false;
        self.displayName = "";
        self.me = null;


        self.logout = doLogout;
        self.fetchCurrentUser = fetchCurrentUser;
        self.allUsers = getAllUsers;
        self.grantAccess = grantAccess;
        self.isAccessible = isAccessible;
        self.removeAccess = removeAccess;
        self.updateMyLessons = updateMyLessons;

        function doLogin(username, password) {
            return $http.post('/users/login', {
                username: username,
                password: password
            });
        }

        function updateMyLessons(user) {
            self.me = user;
        }

        function successFullLogin(displayName) {
            self.displayName = displayName;
        }

        function doLogout() {
            return $http.post('/users/logout');
        }

        function fetchCurrentUser() {
            return $http.get('/users/me');
        }

        function getAllUsers() {
            return $http.get('/users');
        }

        function grantAccess(lessonId, userId) {
            return $http.post('/access', {
                userId: userId,
                resourceId: lessonId
            });
        }

        function removeAccess(id) {
            return $http.delete('/access/' + id);
        }

        function isAccessible(lessonId) {
            if (self.me && self.me.access) {
                return self.me.access.indexOf(lessonId) >= 0;
            }
            return false;
        }


    }
})();
