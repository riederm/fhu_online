(function() {

    angular
            .module('fhu')
            .controller('LoginController', ['userService', '$routeParams', '$location', '$scope', '$rootScope', '$mdToast',
                LoginController
            ]);


    /**
     * the user controller
     * @returns {undefined}
     */
    function LoginController(userService, $routeParams, $location, $scope, $rootScope, $mdToast) {
        var self = this;

        self.login = doLogin;
        self.logout = doLogout;
        self.isLoggedIn = userService.isLoggedIn;
        self.getMessage = getMessage;
        
        if (userService.displayName && userService.displayName.length > 0) {
            self.message = userService.displayName;
        } else {
            self.message = "Anmelden";
        }

        self.user = {
            name: userService.username,
            password: ""
        };
        
        function getMessage(){
            if (userService.displayName && userService.displayName.length > 0){
                return userService.displayName;    
            }
            return "Anmelden";
        }

        function fetchCurrentUser(){
            userService.fetchCurrentUser().success(
                function(data) {
                    
                       if (data && data.displayName) {
                           
                                self.isLoggedIn = true;
                                self.message = data.displayName;
                                userService.me = data;
                                userService.displayName = data.displayName;
                           
                        }    
                    	$rootScope.$broadcast('userChangedEvent');
                });
        }
        $scope.$on('userChangedEvent', function(){
            self.message = userService.displayName; 
        });
        
        fetchCurrentUser();
        
        

        function doLogin() {
            userService.login(self.user.name, self.user.password).success(function(data) {
                
                    self.message = userService.displayName;
                    userService.me = self.user;
                    userService.displayName = self.user.name;
                    self.isLoggedIn = true;
                    fetchCurrentUser();

                
                if ($routeParams.returnTo) {
                    $location.path("#/" + $routeParams.returnTo);
                }
                $rootScope.$broadcast('userChangedEvent');
            }).error(function(){
                $mdToast.show(
                  $mdToast.simple()
                    .content('Login fehlgeschlagen')
                    .position('top right')
                    .hideDelay(3000)
                );
            });
        }

        function doLogout() {
            userService.logout().success(function(data) {
                
                    self.message = "Anmelden";
                    self.isLoggedIn = false;  
                    userService.me = null;
                    userService.displayName = userService.username;  
                    $rootScope.$broadcast('userChangedEvent');
            });
        }

    }

})();
