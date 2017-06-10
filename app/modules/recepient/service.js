(function() {
	'use strict';

	angular.module("HelpOut").factory("RecepientList", function($resource, $location) {
		return function(lang) {
			return $resource('http://172.16.23.101:8081/cashless-homeless/webapi/help/getRecipients', {}, {
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