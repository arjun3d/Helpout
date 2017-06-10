(function() {
	'use strict';
	angular.module("HelpOut").controller("eduCtrl", eduCtrl);

	function eduCtrl($scope,RequestRecepientList,$timeout,$state,RecepientDetails,$filter){
		console.log("HOLa");

		RequestRecepientList().get({
			type:"EDUCATION"
		},function(data){
			console.log("data mila for education");

			var responseData = data.requestList;
			$scope.recepientsList = responseData;

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

	eduCtrl.$inject = ["$scope","RequestRecepientList","$timeout","$state","RecepientDetails","$filter"];

})();