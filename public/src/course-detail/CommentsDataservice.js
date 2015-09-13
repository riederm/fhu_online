(function() {
    'use strict';
    angular.module('fhu')
            .service('commentsDataservice', ['$q', '$http', CommentsDataService]);
    
    
    function CommentsDataService($q, $http) {
        // Promise-based API
        return {
            loadCommentsFor : function(lessonId){
				return $http.get("/comments", {"lessonId": lessonId });
			},
            
            saveComment : function(comment, userId, lessonId){
                return $http.post("/comments", {
                   "authorId": userId,
                   "comment": comment,
                   "lessonId": lessonId
                });
            }
        };
    }

})();
