/**
 * @date 24/03/2017
 * @version 1.0
 * @author Junaid Aslam , Jorge fernandez
 * @description contains all the implemented functions.
 */
(function() {
    // This is the instance of our angular app
    angular.module("sellBuyApp").controller("RegistryController", ['$scope', '$window', '$cookies',
        'AutoIncrementId', 'GetLoggedCookie',
        function($scope, $window, $cookies, AutoIncrementId, GetLoggedCookie) {

            $scope.userEntry = new User();
            $scope.pageSize = 5;
            $scope.currentPage = 1;
            $scope.filteredData;

            $scope.loginEmail;
            $scope.loginPassword;


            /**
             * @date 24/03/2017
             * @version 1.0
             * @function initializeUsers()
             * @param none
             * @author Junaid Aslam , Jorge fernandez
             * @description creates users for the application
             * @return none
             */
            this.initializeUsers = function() {
                // function(id, name, email, password) {

                var user = new User();
                user.construct(AutoIncrementId.id(), "Jean", "jean@gmail.com", "jean123", "user");
                $scope.$parent.registredUsers.push(angular.copy(user));

                var user = new User();
                user.construct(AutoIncrementId.id(), "Aleix", "aleix@gmail.com", "aleix123", "user");
                $scope.$parent.registredUsers.push(angular.copy(user));

                var user = new User();
                user.construct(AutoIncrementId.id(), "David", "david@gmail.com", "david123", "user");
                $scope.$parent.registredUsers.push(angular.copy(user));

                var user = new User();
                user.construct(AutoIncrementId.id(), "Jorge", "jorge@gmail.com", "jorge123", "user");
                $scope.$parent.registredUsers.push(angular.copy(user));

                var user = new User();
                user.construct(AutoIncrementId.id(), "admin", "admin@gmail.com", "admin123", "admin");
                $scope.$parent.registredUsers.push(angular.copy(user));

                for (var i = 0; i < 10; i++) {
                    var user = new User();
                    var id = AutoIncrementId.id();
                    var us_name = "user" + id
                    user.construct(id, us_name, us_name + "@gmail.com", us_name + "123", "user");
                    $scope.$parent.registredUsers.push(user);
                }
                $scope.filteredData = $scope.$parent.registredUsers;

            }

            /**
             * @date 24/03/2017
             * @version 1.0
             * @function registerUser()
             * @param none
             * @author Junaid Aslam , Jorge fernandez
             * @description registers a user in a array
             * @return none
             */

            this.registerUser = function() {

                try {
                    $scope.userEntry.setId(AutoIncrementId.id());
                    $scope.$parent.registredUsers.push(angular.copy($scope.userEntry));

                    $scope.registryMng.$setPristine();
                    $scope.userEntry = new User();

                    if ($scope.$parent.action == 'register') $scope.$parent.action = "login";
                    $(".error").html("Successfully registred.").addClass("showError");

                } catch (err) {
                    $(".error").html("Error en el registro.").addClass("showError");
                }

            }

            /**
             * @date 24/03/2017
             * @version 1.0
             * @function removeUser(userId)
             * @param userId -> the id of the user
             * @author Junaid Aslam , Jorge fernandez
             * @description removes a user from the array
             * @return none
             */

            this.removeUser = function(idUser) {
                var users = $scope.$parent.registredUsers;

                for (var i = 0; i < users.length; i++) {
                    var id = users[i].getId();
                    if (id == idUser) {
                        $scope.$parent.registredUsers.splice(i, 1);
                        break;
                    }
                }
            }

            /**
             * @date 24/03/2017
             * @version 1.0
             * @function userTotalAnnounces(userId)
             * @param userId -> the id of the logged user
             * @author Junaid Aslam , Jorge fernandez
             * @description counts the number of the uploaded announces by a user
             * @return count announces number
             */

            this.userTotalAnnounces = function(userId) {
                var count = 0;
                var announces = $scope.registredAnnounces;
                for (var i = 0; i < announces.length; i++) {
                    if (announces[i].getUserId() == userId) {
                        count += 1;
                    }
                }
                return count;
            }

            /**
             * @date 24/03/2017
             * @version 1.0
             * @function modifyUser()
             * @param $index -> the announcement object from the array
             * @author Junaid Aslam , Jorge fernandez
             * @description modifies a user from the array
             * @return none
             */
            this.modifyUser = function() {
                var users = $scope.$parent.registredUsers;

                var id = $scope.$parent.loggedUser.id - 1;

                $scope.userEntry = $scope.$parent.registredUsers[id];

            }

            this.initializeUsers();
            if(typeof($scope.loggedUser) != "undefined")
            this.modifyUser();


        }
    ]); //End controller

    angular.module("sellBuyApp").directive("registryForm", function() {
        return {
            restrict: 'E',
            templateUrl: "views/templates/registry-form.html",
            controller: function() {

            },
            controllerAs: "registryForm"
        }
    });

    angular.module("sellBuyApp").directive("showUserInfo", function() {
        return {
            restrict: 'E',
            templateUrl: "views/templates/show-user-info.html",
            controller: function() {

            },
            controllerAs: "showUserInfo"
        }
    });

})(); //End angular
