(function() {
	'use strict';

	angular.module("HelpOut").factory("RecepientList", function($resource, $location) {
		return function(lang) {
			return $resource('./requestList.json', {}, {
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