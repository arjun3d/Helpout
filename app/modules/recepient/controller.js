(function() {
	'use strict';
	angular.module("HelpOut").controller("recepCtrl", recepCtrl);

	function recepCtrl($scope,RecepientDetails,$state,$stateParams){
		console.log("HOLaAAAAA");
		$scope.recepientId = $stateParams.recepientId;
		RecepientDetails("nl",$scope.recepientId).get({
			type:"EDUCATION"
		},function(data){
			console.log("data mila for education");

			$scope.recepientsList = data;
		},function(error){
			console.log("abcd nhi aata  hai");

			$scope.showError = true;

			$timeout(function(){
				$state.go("home");
			},2000);


		});

		recepCtrl.$inject = ["$scope","RecepientDetails",'$state','$stateParams'];

	}
})();