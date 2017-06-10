/**
 * This file defines all the Custom modules that needs to injected into individual application modules
 * so as to utilise the LiWid libraires.
 * @author Alkesh Attal - c20482
 */

//=============
/**
 * LiWidDirectives - module which binds all the custom directives added in the
 * framework. The dependencies should be added as required.
 * 
 */

angular.module("LiWidDirectives", [ 'gettext' ]);

/**
 * LiWidServices - module which binds all the custom services - Values,
 * Constants, Factory, Service, Providers. The dependencies should be added as
 * required.
 * 
 */

angular.module("LiWidServices", [ 'gettext' ]);

/**
 * LiWidFilters - module which binds all the custom filters.The dependencies should be added as
 * required.
 * 
 */

angular.module("LiWidFilters", []);