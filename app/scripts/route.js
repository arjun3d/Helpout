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

var recepientList = {
      url:'/recepient',
      templateUrl: './app/modules/recepient/recepient.html',
      controllerUrl:'./app/modules/recepient/controller.js',
      controller: 'recepCtrl',
      /* controllerAs: 'home'*/
    }


    $stateProvider.state('home', home);
    $stateProvider.state('recepient', recepientList);
    $urlRouterProvider.otherwise('/home');


    


  };

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];


})();



