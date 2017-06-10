/**
 * LiWidServices module is defined in ./../liwid-modules.js and hence it
 * should be loaded before this file along with its depenedent modules.
 * This service provides a factory to display an error on top of the screen
 * @author Alkesh Attal - c20482
 */

 angular.module('LiWidServices').factory('ErrorService', ['gettextCatalog', function(gettextCatalog) {
 	return {
 		showError: function(error) {
 			$('#http-error-id').empty();
 			var text = gettextCatalog.getString(error);
 			$('#http-error-id').addClass("xx-http-error-message").html("<div class='mcf-notification-container' style='position:relative;'><div class='mcf-notification-icon mcf-notification-icon-warning' style='margin:-6px;position:absolute;'></div>" 
 				+"<div class='mcf-notification-message-container'><p style='margin-left:35px;'>" + text +"</p></div></div>" );
 			$('#http-error-id').show();
 			$('#dbody').removeClass("transparent");
 			usSpinnerService.stop('spinner-1');
 		}
 	};
 }]);