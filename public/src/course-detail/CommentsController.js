(function() {

    angular
            .module('fhu')
            .controller('CommentsController', [
                 'userService', 'commentsDataservice', '$routeParams', '$mdToast',
                CommentsController
            ]);


    function CommentsController(userService, commentsDataservice, $routeParams, $mdToast) {
        self = this;
        
        self.commentsLoading = false;
        var lessonId = $routeParams.lessonId;
        
        self.comment = "";
        
        self.comments = [];
        self.addComment = addComment;
        self.loadComments = loadComments;
        
        loadComments();
        
        
        function addComment(){
            var c = self.comment;
            self.comment = "";
            commentsDataservice.saveComment(c, userService.me.id, lessonId)
                .success(function(){
                    $mdToast.show($mdToast.simple()
                            .content('erfolgreich gespeichert')
                            .position('top right')
                            .hideDelay(3000));
                    self.loadComments();
                });
        }

        function loadComments(){    
            self.commentsLoading = true;
            commentsDataservice.loadCommentsFor(lessonId)
                    .success(function(comments){
                         self.commentsLoading = false;
                         self.comments = comments;
                    }).error(function(){
                        self.commentsLoading = false;
                    });
        }
    }

})();
