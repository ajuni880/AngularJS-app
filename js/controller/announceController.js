/**
 * @date 09/03/2017
 * @version 1.0
 * @author Junaid Aslam
 * @description contains all the implemented functions.
 */
(function() {
    // This is the instance of our angular app
    angular.module("sellBuyApp").controller("AnnounceController", ['$scope','$window', '$cookies',
  'AutoIncrementId','GetLoggedCookie',function($scope, $window, $cookies , AutoIncrementId,GetLoggedCookie) {

            $scope.pageSize = 5;
            $scope.currentPage = 1;
            $scope.filteredData;

            $scope.userAnnounces = [];
            $scope.announce;
            //Cookie management
            $scope.cookieName = "announces";
            $scope.path = "/";
            /**
             * @date 22/03/2017
             * @function init()
             * @version 1.0
             * @author Junaid Aslam, Jorge fernandez
             * @description Instances a new object with all their parameters, shows the form
             * @param none
             * @return none
             */

            this.init = function() {
                $scope.announce = new Announce();
                $scope.valid = false;
                $scope.announce.setUploadDate(new Date(), 'yyyy-MM-dd HH:mm');
            }
            /**
             * @date 22/03/2017
             * @version 1.0
             * @function backForm()
             * @author Junaid Aslam, Jorge fernandez
             * @description Backs to the form, the user must ensures the data he input
             * @param none
             * @return none
             */
            this.backForm = function() {
                $scope.valid = false;
            }
            /**
             * @date 22/03/2017
             * @version 1.07
             * @function createAnnounce()
             * @author Junaid Aslam, Jorge fernandez
             * @description creates the object a we pushes into an array. Sets pristine!
             * @param none
             * @return none
             */

            this.createAnnounce = function() {
                $scope.announce.setId(AutoIncrementId.id());
                $scope.$parent.registredAnnounces.push(angular.copy($scope.announce));
                $scope.userAnnounces.push(angular.copy($scope.announce));
                $scope.form.$setPristine();

            }

            /**
             * @date 22/03/2017
             * @version 1.0
             * @function initializeCategories()
             * @author Junaid Aslam, Jorge fernandez
             * @description creates a categories and we inputs into an array
             * @param none
             * @return none
             */

            this.initializeCategories = function() {
                var categoryNames = ["Smartphones", "Tablets", "Laptops"];
                for (var i = 0; i < categoryNames.length; i++) {
                    var category = new Category();
                    category.construct(i, categoryNames[i]);
                    $scope.$parent.categories.push(category);
                }


            }

            this.initialize = function() {
                //function(id, description, price, uploadDate, userId, categoryId)
                $scope.announce1 = new Announce();
                $scope.announce1.construct(0, "Funda Samsung S7", 5.95, randomDate(), "images/0.jpg", $scope.$parent.registredUsers[0].getId(), $scope.$parent.categories[0].getId());
                $scope.$parent.registredAnnounces.push(angular.copy($scope.announce1));

                $scope.announce2 = new Announce();
                $scope.announce2.construct(1, "Xiaomi Mi5s", 205, randomDate(), "images/1.jpg", $scope.$parent.registredUsers[1].getId(), $scope.$parent.categories[0].getId());
                $scope.$parent.registredAnnounces.push(angular.copy($scope.announce2));

                $scope.announce3 = new Announce();
                $scope.announce3.construct(3, "Tablet S7", 255.95, randomDate(), "images/3.jpg", $scope.$parent.registredUsers[1].getId(), $scope.$parent.categories[1].getId());
                $scope.$parent.registredAnnounces.push(angular.copy($scope.announce3));

                $scope.announce4 = new Announce();
                $scope.announce4.construct(4, "iPad 2", 100, randomDate(), "images/4.jpg", $scope.$parent.registredUsers[0].getId(), $scope.$parent.categories[1].getId());
                $scope.$parent.registredAnnounces.push(angular.copy($scope.announce4));

                $scope.announce5 = new Announce();
                $scope.announce5.construct(5, "MacBook Air2", 600, randomDate(), "images/5.jpg", $scope.$parent.registredUsers[2].getId(), $scope.$parent.categories[2].getId());
                $scope.$parent.registredAnnounces.push($scope.announce5);

                $scope.announce6 = new Announce();
                $scope.announce6.construct(6, "Sony vaio", 800, randomDate(), "images/6.jpg", $scope.$parent.registredUsers[2].getId(), $scope.$parent.categories[2].getId());
                $scope.$parent.registredAnnounces.push($scope.announce6);

                $scope.filteredData = $scope.$parent.registredAnnounces;
            }

            var userId = typeof($scope.$parent.loggedUser) != "undefined" ? $scope.$parent.loggedUser.id : -1;

            this.getUserAnnounces = function() {
                var announces = $scope.$parent.registredAnnounces;
                for (var i = 0; i < announces.length; i++) {
                    var id = announces[i].getUserId();
                    if (id == userId) {
                        $scope.userAnnounces.push(announces[i]);
                    }
                }
                console.log("Anuncios: " + $scope.userAnnounces);
            }


            /**
             * @date 22/03/2017
             * @version 1.0
             * @function remove($index)
             * @param $index -> the announcement object from the array
             * @author Junaid Aslam, Jorge fernandez
             * @description removes an announcement from the array
             * @return none
             */
            this.remove = function(index,idAnnounce) {
                // $scope.$parent.registredAnnounces.splice($index, 1);
                var announces = $scope.$parent.registredAnnounces;

                  for (var i = 0; i < announces.length; i++) {
                    var id = announces[i].getId();
                    if( id == idAnnounce){
                      $scope.$parent.registredAnnounces.splice(i,1);
                      $scope.userAnnounces.splice(index,1);
                      break;
                    }
                  }
            }
            /**
             * @date 22/03/2017
             * @version 1.0
             * @function modifyAnnounce($index)
             * @param $index -> the announcement object from the array
             * @author Junaid Aslam , Jorge fernandez
             * @description modifies an announcement from the array
             * @return none
             */
            this.modifyAnnounce = function(index) {
                var announceId = $scope.$parent.userAnnounces[index];
                $scope.$parent.action = "modify";
                $scope.announce = announceId;
            }

            this.initializeCategories();
            this.initialize();
            this.init();
            if(userId != -1) this.getUserAnnounces();

        }
    ]); //End controller


    angular.module("sellBuyApp").directive("announceView", function() {
        return {
            restrict: 'E',
            templateUrl: 'views/templates/announce-view.html',
            controller: function() {

            },
            controllerAs: ' announceView'
        }
    });

    angular.module("sellBuyApp").directive("userAnnouncesView", function() {
        return {
            restrict: 'E',
            templateUrl: 'views/templates/user-announces-view.html',
            controller: function() {

            },
            controllerAs: ' userAnnounceView'
        }
    });


    angular.module("sellBuyApp").directive("showAnnounceInfo", function() {
        return {
            restrict: 'E',
            templateUrl: "views/templates/show-announce-info.html",
            controller: function() {

            },
            controllerAs: "showAnnounceInfo"
        }
    });

    angular.module("sellBuyApp").directive("announceForm", function() {
        return {
            restrict: 'E',
            templateUrl: "views/templates/announce-form.html",
            controller: function() {

            },
            controllerAs: "annouceForm"
        }
    });
})(); //End angular

function randomDate() {
    var date = new Date();
    var day = Math.floor(Math.random() * 30);
    date.setDate(day);
    return date;
}
