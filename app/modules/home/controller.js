angular.module("HelpOut").controller("homeCtrl", homeCtrl);

function homeCtrl($scope){
	console.log("HOLa");
}

homeCtrl.$inject = ["$scope"];