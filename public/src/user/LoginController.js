(function() {

    angular
            .module('courses')
            .controller('LoginController', ['userService', '$routeParams', '$location',
                LoginController
            ]);


    /**
     * the user controller
     * @returns {undefined}
     */
    function LoginController(userService, $routeParams, $location) {
        var self = this;

        self.login = doLogin;
        self.isLoggedIn = false;
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
                    }
                });

        function doLogin() {
            userService.login(self.user.name, self.user.password).success(function(data) {
                self.message = userService.displayName;
                userService.displayName = self.user.name;
                self.isLoggedIn = true;
                if ($routeParams.returnTo) {
                    $location.path("#/" + $routeParams.returnTo);
                }
            });
        }

    }

})();
