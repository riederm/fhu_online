(function() {
    'use strict';

    angular.module('fhu')
            .service('coursesService', ['$q', '$http', CoursesDataservice]);

    /**
     * Courses DataService
     * Courses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function CoursesDataservice($q, $http) {
        // Promise-based API
        return {
            loadAll: function() {
                // Simulate async nature of real remote calls
                return $http.get('/courses');
                //return $q.when(courses);
            }
        };
    }

})();
