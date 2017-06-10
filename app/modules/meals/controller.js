(function() {
	'use strict';
	angular.module("HelpOut").controller("mealCtrl", mealCtrl);

	function mealCtrl($scope,RequestRecepientList,$timeout,$state){
		console.log("HOLa");

		RequestRecepientList().get({
			type:"MEAL"
		},function(data){
			console.log("data mila for meals");
		},function(error){
			console.log("bhoook lagi hai");
			$scope.showError = true;

			$timeout(function(){
				$state.go("home");
			},2000);
		});

	}

	mealCtrl.$inject = ["$scope","RequestRecepientList","$timeout","$state"];
})();