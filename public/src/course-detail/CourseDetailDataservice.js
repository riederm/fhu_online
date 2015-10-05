(function() {
    'use strict';
    angular.module('fhu')
            .service('courseDetailDataService', ['$q', '$http', 'Backand', CourseDetailDataService]);
    /**
     * Courses DataService
     * Courses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function CourseDetailDataService($q, $http, Backand) {
        // Promise-based API
        return {
            loadAllLessons: function(key) {
                return $http.get('/' + key);
                
            },
            
            loadLesson: function(lessonId){
                return $http ({
                    method: 'GET',
                    url: Backand.getApiUrl() + '/1/query/data/lessonDetail',
                    params: {
                        parameters: {
                        lessonId: lessonId
                        }
                    }
                    });
                
            },
            
            saveLesson : function(lesson){
                return $http ({
                    method: "PUT",
                    url: Backand.getApiUrl() + '/1/objects/lesson/' + lesson.id + '?returnObject=false',
                    data : lesson
                });
            }
        };
        
    }

})();
