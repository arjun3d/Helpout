(function() {
	'use strict';

	angular.module("HelpOut").factory("RecepientList", function($resource, $location) {
		return function(lang) {
			return $resource('http://localhost:9080/securities/transactions/v1', {}, {
				'get': {
					method: 'GET',
					headers: { 'Accept-Language': lang }
				},
				'query': {
					method: 'GET',
					isArray: false,
					headers: { 'Accept-Language': lang }
				}
			});
		};
	});

})();