(function() {
	'use strict';
	angular.module("HelpOut").controller("eduCtrl", eduCtrl);

	function eduCtrl($scope,RequestRecepientList,$timeout,$state,RecepientDetails){
		console.log("HOLa");

		RequestRecepientList().get({
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


		$scope.gotoRecepient=function(recepientId){
			$state.go("recepient",{recepientId:recepientId});

			
		};



	}

	eduCtrl.$inject = ["$scope","RequestRecepientList","$timeout","$state","RecepientDetails"];

})();