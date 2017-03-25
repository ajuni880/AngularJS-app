/**
 * @date 09/03/2017
 * @version 1.0
 * @author Junaid Aslam
 * @description contains all the implemented functions.
 */
(function() {
    // This is the instance of our angular app
    angular.module("sellBuyApp").controller("MainController",['$scope','$cookies','GetLoggedCookie',function($scope, $cookies,GetLoggedCookie) {

            $scope.action = "init";
            $scope.adminAction = "init";

            // Cookies administration
            $scope.loggedUser;
            $scope.path = "/";
            $scope.loggedCookie = "logged";
            $scope.searchCookie = "searchedProduct";

            $scope.categories = [];
            $scope.registredAnnounces = [];
            $scope.registredUsers = [];
            $scope.role;
            $scope.searchBar = $cookies.get($scope.searchCookie);
            $scope.searchSelect;


            //Gets the cookie of the logged user
            var isLogged = GetLoggedCookie.cookie();
            $scope.isLogged = typeof(isLogged) != "undefined" ? true : false;

            /**
             * @date 24/03/2017
             * @version 1.0
             * @function getRole()
             * @param none
             * @author Junaid Aslam , Jorge fernandez
             * @description gets the role of the logged user
             * @return none
             */
            this.getRole = function(){

                if($scope.isLogged){
                  $scope.loggedUser = angular.fromJson(isLogged);
                   role = $scope.loggedUser.role;
                   $scope.role = role;
                } else {
                  $scope.role = "Not logged";
                }
            }

            /**
             * @date 24/03/2017
             * @version 1.0
             * @function login()
             * @param none
             * @author Junaid Aslam , Jorge fernandez
             * @description creates a cookie that contains user data
                       we created this function in mainController because
                       to be able to use the form scope.
             * @return none
             */

            this.login = function(){
              var flag = false;
              var users = $scope.registredUsers;
              angular.forEach(users,function(user, i){
                if($scope.loginEmail == user.getEmail() && $scope.loginPassword == user.getPassword()){

                  var cookie = $cookies.get($scope.loggedCookie);

                  if(isNaN(cookie)){
                        $cookies.putObject($scope.loggedCookie, user, {path: $scope.path});
                        flag = true;
                        location.reload(true);
                  }
                }

              });
              if(!flag) {
                $("#logError").addClass("alert alert-danger").removeClass("hide").fadeIn(400);
              }
            }

            /**
             * @date 24/03/2017
             * @version 1.0
             * @function logout()
             * @param none
             * @author Junaid Aslam , Jorge fernandez
             * @description removes the cookie and the usre 'session'
             * @return none
             */
             this.logout = function(){
               $cookies.remove("logged",{path : "/" });
               location.reload(true);
             }

             /**
              * @date 24/03/2017
              * @version 1.0
              * @function createSearchCookie()
              * @param none
              * @author Junaid Aslam , Jorge fernandez
              * @description creats a cookie for the search bar
              * @return none
              */
             this.createSearchCookie = function(){
               var searchCookie = $cookies.get($scope.searchCookie);
               if(isNaN(searchCookie)){
                 $cookies.put($scope.searchCookie,$scope.searchBar, {path:$scope.path});
               }else{
                 $cookies.remove($scope.searchCookie);
                 $cookies.put($scope.searchCookie,$scope.searchBar, {path:$scope.path});
               }
             }

             this.getRole();

    }]); //End controller

    angular.module("sellBuyApp").directive("adminDashboard", function(){
      return {
        restrict: 'E',
        templateUrl:"views/templates/admin-dashboard.html",
        controller:function(){

        },
        controllerAs:"adminDashboard"
      }
    });

    angular.module("sellBuyApp").directive("loginForm", function(){
      return {
        restrict: 'E',
        templateUrl:"views/templates/login-form.html",
        controller:function(){

        },
        controllerAs:"loginForm"
      }
    });



})(); //End angular
