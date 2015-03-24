(function() {

    angular
            .module('coursedetail')
            .controller('CourseDetailController', [
                'courseDetailDataService', '$mdSidenav', '$mdBottomSheet', '$log', '$routeParams',
                CourseDetailController
            ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function CourseDetailController(courseDetailDataservice, $mdSidenav, $mdBottomSheet, $log, $routeParams) {
        var self = this;
        var courseId = $routeParams.courseId;
        
        self.courseName         = "lade Kurs...";
        self.selected           = null;
        self.lessons            = [];
        self.toggleCoursesList  = toggleCoursesList;
        self.selectLesson       = selectLesson;
        self.loaded             = false;
               
        // Load all registered courses
        courseDetailDataservice
                .loadAllLessons(courseId)
                .then(function(lessons) {
                    self.lessons = lessons.data;
                    self.selected = self.lessons[0];
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

    }

})();
