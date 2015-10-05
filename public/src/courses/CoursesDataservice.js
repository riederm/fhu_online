(function() {
    'use strict';

    angular.module('fhu')
            .service('coursesService', ['$q', '$http', 'Backand', CoursesDataservice]);

    /**
     * Courses DataService
     * Courses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function CoursesDataservice($q, $http, Backand) {
        // Promise-based API
        return {
            loadAll: function() {
                return $http({
                    method: 'GET',
                    url: Backand.getApiUrl() + '/1/objects/course',
                    params: {
                    }
                });
            },
            
            loadLessonsFor: function(courseId){
                  return $http ({
                    method: 'GET',
                    url: Backand.getApiUrl() + '/1/query/data/allLessonsFromCourse',
                    params: {
                        parameters: {
                        courseId: courseId
                        }
                    }
                    });
            }
        };
    }

})();
