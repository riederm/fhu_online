(function() {
    'use strict';
    angular.module('fhu')
            .service('commentsDataservice', ['$q', '$http','Backand', 'userService', CommentsDataService]);
    
    
    function CommentsDataService($q, $http, Backand, userService) {
        // Promise-based API
        return {
            loadCommentsFor : function(lessonId){
                return $http ({
                  method: 'GET',
                  url: Backand.getApiUrl() + '/1/query/data/lessonComments',
                  params: {
                    parameters: {
                      lessonId: lessonId
                    }
                  }
                });
			},
            
            saveComment : function(comment, userId, lessonId){
                return $http({
                method: 'POST',
                    url : Backand.getApiUrl() + '/1/objects/comment',
                    data: {
                        parent_Lesson : lessonId,
                        created_By: userService.me.id,
                        content: comment
                        },
                    params: {
                        returnObject: true
                    }
                });
            }
        };
    }

})();
