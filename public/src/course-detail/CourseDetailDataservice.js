(function() {
    'use strict';
    angular.module('fhu')
            .service('courseDetailDataService', ['$q', '$http', '$routeParams', CourseDetailDataService]);
    /**
     * Courses DataService
     * Courses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function CourseDetailDataService($q, $http) {
        // Promise-based API
        return {
            loadAllLessons: function(key) {
                return $http.get('/' + key);
                
            },
            
            loadLesson: function(course, lesson){
                return $http.get('/' + course + '/' + lesson);
                
            },
            
            saveLesson : function(course, lesson){
                return $http.put('/' + course + '/', lesson);
            }
        };
        
    }

})();
