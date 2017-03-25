(function(){
  angular.module('sellBuyApp', ['ng-currency', 'ui.bootstrap', 'ngCookies','angularUtils.directives.dirPagination']);

  /**
   * @date 24/03/2017
   * @version 1.0
   * @function navbarTemplate()
   * @param none
   * @author Junaid Aslam , Jorge fernandez
   * @description creates the navbar for the application. We create it here
      to be able to use it in all the application.
   * @return none
   */
  angular.module("sellBuyApp").directive("navbarTemplate", function(){
    return {
      restrict: 'E',
      templateUrl:"/Pt3.4/views/templates/navbar-template.html",
      controller:function(){

      },
      controllerAs:"navbarTemplateCtrl"
    }
  });

  /**
   * @date 24/03/2017
   * @version 1.0
   * @function searchForm()
   * @param none
   * @author Junaid Aslam , Jorge fernandez
   * @description creates the searchForm for the application. We create it here
      to be able to use it in all the application.
   * @return none
   */

  angular.module("sellBuyApp").directive("searchForm", function(){
    return {
      restrict: 'E',
      templateUrl:"/Pt3.4/views/templates/search-form.html",
      controller:function(){

      },
      controllerAs:"searchForm"
    }
  });
  /**
   * @date 24/03/2017
   * @version 1.0
   * @function AutoIncrementId()
   * @param none
   * @author Junaid Aslam , Jorge fernandez
   * @description returns a incremented id.
   * @return none
   */
  angular.module("sellBuyApp").service("AutoIncrementId", function(){
    var autoId = 0;
    this.id =  function () {
         autoId += 1;
       return autoId;
     };

  });
  /**
   * @date 24/03/2017
   * @version 1.0
   * @function GetLoggedCookie
   * @param none
   * @author Junaid Aslam , Jorge fernandez
   * @description returns the logged cookie if there is any
   * @return none
   */
  angular.module("sellBuyApp").service("GetLoggedCookie", function($cookies){

    this.cookie = function () {
      var cookie = $cookies.get("logged");
      return cookie;
     };
  })

})();
