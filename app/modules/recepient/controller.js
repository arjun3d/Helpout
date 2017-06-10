(function() {
	'use strict';
	angular.module("HelpOut").controller("recepCtrl", recepCtrl);

	function recepCtrl($scope,RecepientList){
		console.log("HOLaAAAAA");

		

		$scope.getRecepient = function(){
			RecepientList().get({},function(data) {

		console.log("data mila");

		}, function(data) {
			console.log("data nhi mila");

			
		});
		}

		$scope.getRecepient();
		


	}

	recepCtrl.$inject = ["$scope","RecepientList"];

})();