(function() {

    angular
            .module('fhu')
            .controller('CourseDetailController', [
                'courseDetailDataService', '$mdSidenav', '$mdBottomSheet', 'userService', '$routeParams',
                CourseDetailController
            ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function CourseDetailController(courseDetailDataservice, $mdSidenav, $mdBottomSheet, userService, $routeParams) {
        var self = this;
        var courseId = $routeParams.courseId;
        var lessonId = $routeParams.lessonId;
        
        self.courseName         = "lade Kurs...";
        self.selected           = null;
        self.lessons            = [];
        self.toggleCoursesList  = toggleCoursesList;
        self.selectLesson       = selectLesson;
        self.loaded             = false;
        self.user               = userService.me;
        self.isAccessible       = isAccessible;
               
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
        

        // *********************************
        // Internal methods
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleCoursesList() {
            //$mdSidenav('left').toggle();
        }

        /**
         * Select the current avatars
         * @param lesson
         */
        function selectLesson(lesson) {
            self.selected = angular.isNumber(lesson) ? $scope.lessons[lesson] : lesson;
            self.toggleCoursesList();
        }
        
        function isAccessible(){
            return userService.isAccessible(self.selected.id);
        }

    }

})();
