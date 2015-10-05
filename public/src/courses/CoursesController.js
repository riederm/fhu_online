/// <reference path="../../typings/angularjs/angular.d.ts"/>
(function() {

    angular
            .module('fhu')
            .controller('CoursesController', [
                'coursesService', 'courseDetailDataService', '$location', 'userService', '$scope',
                CoursesListController
            ]);

    
    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function CoursesListController(coursesService, courseDetailDataService, $location, userService, $scope) {
        var self = this;

        self.selected = null;
        self.loaded = false;
        self.courses = [];
        self.navItems = [];
        
        self.toggleList     = toggleCoursesList;
        self.select         = select;
        self.selectLesson   = selectLesson;
        self.isAvailable    = isAvailable;
        self.isAccessible   = isAccessible;
    	self.isCourseAccessible = isCourseAccessible;
        
        // Load all registered courses
        coursesService
                .loadAll()
                .then(function(courses) {
                    
                        courses.data.data.forEach(function(course) {
                            course.lessons = [];
                            coursesService
                                .loadLessonsFor(course.id)
                                .then(function(lessons){    
                                        if (_.isArray(lessons.data)){
                                            course.lessons = lessons.data;
                                        }
                                    });
                        });
                    
                    self.courses = [].concat(courses.data.data);
                    self.loaded = true;

                });
                
        $scope.$on('userChangedEvent', function () {
            
            self.courses.forEach(function(course) {
                course.isAccessible = isCourseAccessible(course);
                if (_.isArray(course.lessons)){
                    _.forEach(course.lessons, function(lesson) {
                       lesson.isAccessible = isAccessible(lesson.id);
                    });
                }                
            });
            
        });
        

        // *********************************
        // Internal methods
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleCoursesList() {
           
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function select(o) {
            if (self.selected === o) {
                self.selected = null;
            } else {
                self.selected = angular.isNumber(o) ? $scope.navItems[o] : o;
                self.toggleList();
            }
        }

        function isAvailable(course) {
            return true; //course.resource.length > 0;
        }
        
        function selectLesson(lessonId){
            //#/courseDetail/lessons-welpenkurs/fcd3acb9fea358c7
            $location.path('/courseDetail/' + lessonId);
        }
        
        function isCourseAccessible(course){
            if (course){
                return userService.isCourseAccessible(course);
            }
            return false;
        }
        
        function isAccessible(id){
            var accessible = userService.isAccessible(id);
            if(accessible===true){
                return true;
            }
            return false;
        }
    }

})();
