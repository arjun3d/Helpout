(function() {
	'use strict';
	angular.module("HelpOut").controller("payCtrl", payCtrl);

	function payCtrl($scope,$state, $stateParams){
		console.log("hurrayyyyyy");
		$scope.userId = $stateParams.userId;
		$scope.requestType = $stateParams.requestType;
		$scope.amount = 0.1;

	} 	

	payCtrl.$inject = ["$scope","$state", "$stateParams"];

})();