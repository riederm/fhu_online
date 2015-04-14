(function() {

    angular
            .module('fhu')
            .controller('AccessController', ['userService', '$routeParams', '$location', '$scope',
                AccessController
            ]);


    /**
     * the user controller
     * @returns {undefined}
     */
    function AccessController(userService, $routeParams, $location, $scope) {
        var self = this;

        self.allUsers = [];
        self.selectedItem = null;
        self.searchText = "";
        
        self.searchTextChange       = searchTextChange;
        self.querySearch            = querySearch;
        self.selectedItemChanged    = selectedItemChanged;
        self.grantAccess            = grantAccess;
        self.getGrantedUsers        = getGrantedUsers;
        self.removeAccess           = removeAccess;

        self.access = {};

        userService.allUsers().success(function(users) {
            self.allUsers = users;
        });

        function searchTextChange(searchText) {

        }

        function selectedItemChanged(item) {

        }

        function querySearch(searchText) {
            var lowercaseQuery = angular.lowercase(searchText);
            return self.allUsers.filter(function(it) {
                return (it.username.indexOf(lowercaseQuery) === 0);
            });
        }

        function grantAccess(lessonId, userId) {
            userService.grantAccess(lessonId,  userId).success(function(grant) {
                getGrantedUsers(lessonId, true);
            });
        }
        
        

        function getGrantedUsers(lessonId, force) {
            if (self.access[lessonId] && !force) {
                return self.access[lessonId];
            }

            self.access[lessonId] = [];
            userService.acessOfLesson(lessonId).success(function(data) {
                self.access[lessonId] = data;
            });
        }

        function removeAccess(id, lessonId) {
            
            userService.removeAccess(id).success(function(data) {
                getGrantedUsers(lessonId, true);
            });
        }

    }

})();
