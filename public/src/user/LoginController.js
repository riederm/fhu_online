(function() {

    angular
            .module('fhu')
            .controller('LoginController', ['userService', '$routeParams', '$location', '$scope',
                LoginController
            ]);


    /**
     * the user controller
     * @returns {undefined}
     */
    function LoginController(userService, $routeParams, $location, $scope) {
        var self = this;

        self.login = doLogin;
        self.logout = doLogout;
        self.isLoggedIn = userService.isLoggedIn;
        self.status = "logged out";

        if (userService.displayName && userService.displayName.length > 0) {
            self.message = userService.displayName;
        } else {
            self.message = "Anmelden";
        }

        self.user = {
            name: userService.username,
            password: ""
        };

        userService.fetchCurrentUser().success(
                function(data) {
                   if (data && data.displayName) {
                        self.isLoggedIn = true;
                        self.message = data.displayName;
                        userService.me = data;
                    }
                });

        function doLogin() {
            userService.login(self.user.name, self.user.password).success(function(data) {
                $scope.$apply(function() {
                    self.message = userService.displayName;
                    userService.me = self.user;
                    userService.displayName = self.user.name;
                    self.isLoggedIn = true;


                });
                if ($routeParams.returnTo) {
                    $location.path("#/" + $routeParams.returnTo);
                }
            });
        }

        function doLogout() {
            userService.logout().success(function(data) {
                self.message = "Anmelden";
                self.isLoggedIn = false;
            });
        }

    }

})();
