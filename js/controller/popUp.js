/**
* @date 13/01/2017
* @version 1.0
* @author Junaid Aslam
* @description contains all the implemented functions of the pop up.
*/
(function(){
  // This is the instance of our angular app
  angular.module("ProductsManager").controller("PopUpController",['$scope', '$window', '$cookies',
   function($scope, $window, $cookies){

    $scope.cookieName = "product";
    $scope.productsStock = [];


    /**
    * @date 09/03/2017
    * @name getCookies()
    * @version 1.0
    * @author Junaid Aslam
    * @description gets the saved cookies in the browser
    * @return: none
    * @params: none
    */
    this.getCookies = function(){
      var cookies = $cookies.getAll();
      console.log(cookies);

      angular.forEach(cookies, function(cookie, key){

        if(key != $scope.cookieName){

              var product = new Product();
               // As the cookie cames as an string we convert it to object
               product.cookieToObj(JSON.parse(cookie));
               $scope.productsStock.push(product);
        }

      });
    }

    /**
    * @date 09/03/2017
    * @name totalPrice()
    * @version 1.0
    * @author Junaid Aslam
    * @description adds the price off the selected products
    * @return: none
    * @params: none
    */
    this.totalPrice = function(){
        var sum = 0;
        var prods = $scope.productsStock;
        angular.forEach(prods, function(prod, key){
          sum += parseInt(prod.getPrice());
        });

        return sum;
    }

    this.getCookies();
  }]);//End controller


})();
