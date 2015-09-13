/// <reference path="../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts"/>
(function() {

    angular
            .module('fhu')
            .controller('AccessController', ['userService', '$routeParams', '$location', '$scope', 'accessService',
                AccessController
            ]);


    /**
     * the user controller
     * @returns {undefined}
     */
    function AccessController(userService, $routeParams, $location, $scope, accessService) {
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
            self.allUsers = _.object(
                _.map(users, function(user){ return user.id; }), 
                _.map(users, function(user){ return user; })
                );
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
            if (lessonId){
                if (self.access[lessonId] && !force) {
                    return self.access[lessonId];
                }
    
                self.access[lessonId] = [];
                accessService.getAccessOf(lessonId).success(function(data) {
                    //{"userId":"...","resourceId":"...","id":"..."}
                    self.access[lessonId] = _.map(self.allUsers, function(o) { 
                        var user = {
                            user: o,
                            access : _.some(data, function(a) { return a.userId === o.id;})
                        };
                        return user;
                        //return self.allUsers[o.userId];
                    });
                    var x = 3;
                });
            }
        }

        function removeAccess(id, lessonId) {
            
            userService.removeAccess(id).success(function(data) {
                getGrantedUsers(lessonId, true);
            });
        }

    }

})();
