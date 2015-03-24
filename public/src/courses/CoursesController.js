(function() {

    angular
            .module('courses')
            .controller('CoursesController', [
                'coursesService', '$mdSidenav', '$mdBottomSheet', '$log',
                CoursesListController
            ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function CoursesListController(coursesService, $mdSidenav, $mdBottomSheet, $log) {
        var self = this;

        self.selected = null;
        self.courses = [];
        self.navItems = [];
        self.toggleList = toggleCoursesList;
        self.selectNav = select;
        self.loaded = false;
        self.isAvailable = isAvailable;

        self.navItems = [
            {name: "Kurse"},
            {name: "Über Uns"},
            {name: "Log Out"}
        ];
        self.selectNav(self.navItems[0]);
        // Load all registered courses

        coursesService
                .loadAll()
                .then(function(courses) {
                    self.courses = [].concat(courses.data);
                    self.loaded = true;
                });

        // *********************************
        // Internal methods
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleCoursesList() {
            $mdSidenav('left').toggle();
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function select(o) {
            self.selected = angular.isNumber(o) ? $scope.navItems[o] : o;
            self.toggleList();
        }
        
        function isAvailable(course){
            return course.resource.length > 0;
        }

    }

})();
