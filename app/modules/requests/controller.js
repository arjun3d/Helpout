(function() {
	'use strict';
	angular.module("HelpOut").controller("reqCtrl", reqCtrl);

	function reqCtrl($scope,RecepientList,$state){
		console.log("HOLaAAAAA");

		$scope.requestList = {}
		;
		$scope.getRecepient = function(){
			RecepientList().get({},function(data) {
				$scope.requestList=data.requestList;
				$scope.requestList[0].recipient.userId;
				console.log("data mila"  + $scope.requestList[0].recipient.userId);
				console.log("data mila"  + $scope.requestList[0].recipient.image.imageUrl);
			}, function(data) {
				console.log("data nhi mila");		
			});
		}

		$scope.getRecepient();
		
		$scope.help=function(userId,requestType){
			console.log("Helllllllllllllpppp");
			var inputParams= {
				userId:userId,
				requestType:requestType
			};
			$state.go('payment',inputParams);
		};



	}

	reqCtrl.$inject = ["$scope","RecepientList",'$state'];

})();