(function() {
	'use strict';
	angular.module("HelpOut").controller("recepCtrl", recepCtrl);

	function recepCtrl($scope,RecepientList){
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

	};



	}

	recepCtrl.$inject = ["$scope","RecepientList"];

})();