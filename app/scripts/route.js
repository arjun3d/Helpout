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

   
    var meals = {
      url:'/meals',
      templateUrl: './app/modules/meals/meals.html',
      controllerUrl:'./app/modules/meals/controller.js',
      controller: 'mealCtrl',
      /* controllerAs: 'home'*/
    }

    var education = {
      url:'/education',
      templateUrl: './app/modules/education/education.html',
      controllerUrl:'./app/modules/education/controller.js',
      controller: 'eduCtrl',
      /* controllerAs: 'home'*/
    }

    var recepient = {
      url:'/recepient',
      templateUrl: './app/modules/recepient/recepient.html',
      controllerUrl:'./app/modules/recepient/controller.js',
      controller: 'recepCtrl',
      /* controllerAs: 'home'*/
    }

    $stateProvider.state('home', home);
    $stateProvider.state('meals', meals);
    $stateProvider.state('education', education);
    $stateProvider.state('recepient', recepient);
   /* $stateProvider.state('payment', payment);*/
    $urlRouterProvider.otherwise('/home');


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



  };

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];


})();



