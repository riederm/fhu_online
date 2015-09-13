(function() {

    angular
            .module('fhu')
            .controller('CourseDetailController', [
                'courseDetailDataService', '$mdSidenav', '$mdBottomSheet', 'userService', '$routeParams','$mdToast',
                CourseDetailController
            ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function CourseDetailController(courseDetailDataservice, $mdSidenav, $mdBottomSheet, userService, $routeParams, $mdToast) {
        var self = this;
        var courseId = $routeParams.courseId;
        var lessonId = $routeParams.lessonId;
       
        self.courseName         = "lade Kurs...";
        self.selected           = null;
        self.lessons            = [];
        self.selectLesson       = selectLesson;
        self.loaded             = false;
        self.user               = userService.me;
        self.isAccessible       = isAccessible;
        self.isAdmin            = isAdmin;
        self.editMode           = false;
        self.editModeChanged    = editModeChanged;
        
               
        // Load all registered courses
//        courseDetailDataservice
                //.loadAllLessons(courseId)
//                .loadLesson(courseId)
//                .then(function(lessons) {
//                    self.lessons = lessons.data;
//                    self.selected = self.lessons[0];
//                    self.loaded = true;
//                });
                
        courseDetailDataservice
                .loadLesson(courseId, lessonId)
                .then(function(lesson){
                    self.selected = lesson.data;
                    self.loaded = true;
                        });
        

        /**
         * Select the current avatars
         * @param lesson
         */
        function selectLesson(lesson) {
            self.selected = angular.isNumber(lesson) ? $scope.lessons[lesson] : lesson;
            self.toggleCoursesList();
        }
        
        function isAccessible(){
            return self.selected && self.selected.id
                    && userService.isAccessible(self.selected.id);
        }
        
        function isAdmin(){
            return userService.me.isAdmin;
        }
        
        function editModeChanged(){
            if (!self.editMode){
                //save changes to server
                courseDetailDataservice
                    .saveLesson(courseId, self.selected)
                    .then(function(savedLesson){
                        $mdToast.show($mdToast.simple()
                            .content('erfolgreich gespeichert')
                            .position('top right')
                            .hideDelay(3000)
                        );
                    });
            }
        }

    }

})();
