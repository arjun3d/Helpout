function gotoRecepientPage(){
    $("#myApp").show();
    $("#home").hide();
}
(function(){

'use strict'





var app =   angular.module("HelpOut", ['ui.router','ngResource','gettext','angularSpinner']);



app.value('currentLang', 'nl');
app.controller('headerController', headerController);
function headerController(gettextCatalog, currentLang, $rootScope) {
            var langCtrl = this;
            langCtrl.selectedLanguage = currentLang;
            gettextCatalog.setCurrentLanguage(currentLang);
            $rootScope.currentLang = "nl";
            langCtrl.changeLanguage = function() {
                currentLang = langCtrl.selectedLanguage;
                $rootScope.currentLang = currentLang;
                gettextCatalog.setCurrentLanguage(langCtrl.selectedLanguage);
            };
        };

headerController.$inject = ['gettextCatalog', 'currentLang', '$rootScope'];

})();

  

