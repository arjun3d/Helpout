(function() {
	'use strict';

	angular.module("HelpOut").factory("RecepientDetails", function($resource, $location) {
		return function(lang,recepientId) {
			/*return $resource('./requestList.json/'+recepientId, {}, {*/
				return $resource('./requestList.json/', {}, {
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