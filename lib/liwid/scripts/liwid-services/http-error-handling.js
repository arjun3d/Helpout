/**
 * LiWidServices module is defined in ./../liwid-modules.js and hence it
 * should be loaded before this file along with its depenedent modules.
 * This service provides a factory to display an error on top of the screen
 * @author Alkesh Attal - c20482
 */

 'use strict';

 var showMessage = function(content, key) {
   $('#http-error-block').empty();
   $('#http-error-block').html( "<div class='alert alert-warning'><span class='glyphicon glyphicon-warning-sign' id='errorImage'></span> <h3>" + content +"</h3></div>");
   $('#errorImage').attr("title",key);
   $('#http-error-block').show();
 };

/**
 * liwidHttpErrorResponseInterceptor acts as an HTTPresponseinterceptor, foe now it has only reponseError interception
 */
 angular.module('LiWidServices').factory('liwidHttpErrorResponseInterceptor', ['$timeout', '$q', function($timeout, $q) {  
  /**
    * responseErrorInterceptor in case of error from backend- message thrown from backend is displayed, 
    * message key is displayed on mouseover on error icon
    */
    var responseErrorInterceptor = {
      'responseError': function(rejection)
      { 
        if(rejection.data!==null && angular.isDefined(rejection.data.messages) && rejection.data.messages[0]!==null){
         showMessage(rejection.data.messages[0].messageText,rejection.data.messages[0].messageKey);
         if(rejection.data.messages.length > 0) {
          for(var i=0; i<rejection.data.messages.length; i++) {
            showMessage(rejection.data.messages[i].messageText, rejection.data.messages[0].messageKey);
          }
        }
      }
      return $q.reject(rejection);
    }
  };

  return responseErrorInterceptor;
  
}]);

/**
 * InitialAuthCheck service to check the authorisation, whether MSEC has been setup or not, or checking for
 * particular functionalty access as there will be no data message in case of 401 and 403
 */
 angular.module('LiWidServices').factory('InitialAuthCheck',['$http','$compile','$rootScope',function ($http,$compile,$rootScope) {
  return function(authUrl,authErrorMsg,errorKey){
    $http.get(authUrl).
    error(function (data, status) {
      if(status==401||status==403){
        $('.panel-body').css({"visibility":"hidden"});
        $('.panel-footer').css({"visibility":"hidden"});
        $('#http-error-block').css({"visibility":"visible"});
        $('#http-error-block').empty();
        $('#http-error-block').html($compile("<div class='alert alert-warning'> <span class='glyphicon glyphicon-warning-sign' id='errorImage'></span><h3 translate>" + authErrorMsg +" </h3></div>")($rootScope));
        $('#errorImage').attr("title",errorKey);
        $rootScope.isAuthorised=false;
      }
      else{
        $rootScope.isAuthorised=true;
      }
    });
  }
}]);
