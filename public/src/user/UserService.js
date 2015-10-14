/// <reference path="../../typings/underscore/underscore.d.ts"/>
(function() {
    'use strict';

    angular.module('fhu')
            .service('userService', ['$q', '$http', 'Backand', userService]);

    function userService($q, $http, Backand, $rootScope) {
        var self = this;
        self.login = doLogin;
        self.sessionId = "";
        self.isLoggedIn = false;
        self.displayName = "";
        self.me = null;


        self.logout = doLogout;
        self.fetchCurrentUser = fetchCurrentUser;
        self.allUsers = getAllUsers;
        self.isAccessible = isAccessible;
        self.isCourseAccessible = isCourseAccessible;
        self.updateMyLessons = updateMyLessons;

        function doLogin(username, password) {
            return Backand.signin(username, password, 'fhu');
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
        
        function isCourseAccessible(course){
            if (course.lessons && course.lessons.length > 0){
                var lessons = course.lessons;
                
                return _.some(lessons, function(lesson){
                     return self.isAccessible(lesson.id);
                });
            }
            return false;
        }

        function isAccessible(lessonId) {
            if (self.me && self.me.access) {
                return self.me.isAdmin || self.me.access.indexOf(lessonId) >= 0;
            }
            return false;
        }


    }
})();
