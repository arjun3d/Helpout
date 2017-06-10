(function(){
  'use strict'

  angular.module('HelpOut').config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider){

    var home = {
      url:'/home',
      templateUrl: './app/modules/home/home.html',
      controllerUrl:'./app/modules/home/controller.js',
      controller: 'homeCtrl',
      /* controllerAs: 'home'*/
    }

    var requestList = {
      url:'/requests',
      templateUrl: './app/modules/requests/request.html',
      controllerUrl:'./app/modules/requests/controller.js',
      controller: 'recepCtrl',
      /* controllerAs: 'home'*/
    }

    var payment = {
      url:'/payment',
      templateUrl: './app/modules/payment/payment.html',
      controllerUrl:'./app/modules/payment/controller.js',
      controller: 'payCtrl',
      /* controllerAs: 'home'*/
    }



    $stateProvider.state('home', home);
    $stateProvider.state('requests', requestList);
    $urlRouterProvider.otherwise('/home');


    


  };

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];


})();



