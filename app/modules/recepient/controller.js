(function() {
	'use strict';
	angular.module("HelpOut").controller("recepCtrl", recepCtrl);

	function recepCtrl($scope,RecepientDetails,$state,$stateParams,$http,Base64){
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


		function makePayment(){
			var amount= 0.1;
			var paymentDesc= "Paying for meals of A1 B1";

		}


		$scope.GetAuthToken = function () {


			var req = {
				
				method: 'POST',
				url: 'https://api-sandbox.abnamro.com/v1/oauth/token',
				headers : {
					'Content-Type':'application/x-www-form-urlencoded'
				},
				data:{
					grant_type : "client_credentials",
					accountNumber : "NL28ABNA0571277676"
				},

			};


			/*var data = $.param({
				grant_type : "client_credentials",
				accountNumber : "NL28ABNA0571277676"
			});
			method: 'POST',
			var config = {
				headers : {
					'authorization': 'Basic RG9ONnMyTFYwM1d0V0kzYnZjRGdqS05tM2tySUVSNlI6eWhkTExMeFBlTW9BVTV1QQ==',
					'Content-Type':'application/x-www-form-urlencoded'
				}
			}*/
			$http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode('admin' + ':' + 'abc12345');

			$http(req).then(function(){console.log(data);}, function(){console.log("ooopppsss");});
			/*$http.post('https://api-sandbox.abnamro.com/v1/oauth/token', data, config)
			.success(function (data, status, headers, config) {
				console.log(data);
			})
			.error(function (data, status, header, config) {
				console.log("ooopppsss");
			});*/
		};

		$scope.GetAuthToken();

		recepCtrl.$inject = ["$scope","RecepientDetails",'$state','$stateParams','$http','Base64'];

	}
})();