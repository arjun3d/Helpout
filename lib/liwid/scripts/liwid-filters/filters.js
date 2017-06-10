/**
 * LiWidFilters module is defined in ./../liwid-modules.js and hence it
 * should be loaded before this file along with its depenedent modules.
 * @author Alkesh Attal - c20482
 */

'use strict';
/**
 *This filter formats the account/depot/portfolio/tegenrekening number
 */

angular.module('LiWidFilters').filter('formatAccountNr', function() {
    return function(input) {
        if (input === null || angular.isUndefined(input)) {
            return input;
        }
        var str1, str2, str3, str4, formatted, temp;
        input = input.toString();
        temp = input.replace(/^0+/, '');
        temp = temp.replace(/^\s+|\s+$/g, '');
        if (temp.length < 8 || temp.length > 10) {
            return input;
        } else if (temp.length === 9) {
            str1 = temp.substring(0, 2);
            str2 = temp.substring(2, 4);
            str3 = temp.substring(4, 6);
            str4 = temp.substring(6, 9);
            formatted = str1 + '.' + str2 + '.' + str3 + '.' + str4;
            return formatted;
        } else if (temp.length === 10) {
            if (temp.substring(0, 2)==="99") {
            	str1 = temp.substring(0, 2);
                str2 = temp.substring(2, 5);
                str3 = temp.substring(5, 10);
                formatted = str1 + '.' + str2 + '.' + str3;
            } else {
                str1 = temp.substring(0, 3);
                str2 = temp.substring(3, 5);
                str3 = temp.substring(5, 7);
                str4 = temp.substring(7, 10);
                formatted = str1 + '.' + str2 + '.' + str3 + '.' + str4;
            }
            return formatted;
        } else if (temp.length === 8) {
            str1 = temp.substring(0, 1);
            str2 = temp.substring(1, 4);
            str3 = temp.substring(4, 7);
            str4 = temp.substring(7, 8);
            formatted = str1 + '.' + str2 + '.' + str3 + '.' + str4;
            return formatted;
        }
    };
});

/**
 *This filter provides trimming functionality.
 */
angular.module('LiWidFilters').filter('trim', function() {
    return function(value) {
        if (!angular.isString(value)) {
            return value;
        }
        return value.replace(/^\s+|\s+$/g, '');
    };
});

/**
 *This filter converts the first letter of the string to uppercase and converts the remaining characters to lowercase.
 */
angular.module('LiWidFilters').filter('capitalize', function() {
    return function(input) {
        return (angular.isString(input) && input.length > 0) ? input[0].toUpperCase() + input.substr(1).toLowerCase() : input;
    }
});

/**
 *This filter converts the date  to UTC date
 */
angular.module('LiWidFilters').filter('UTCDateConverter', function() {
    function toUTCDate(date) {
        var _utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
        return _utc;
    };

    function millisToUTCDate(millis) {
        return toUTCDate(new Date(millis));
    };

    return function(utcDateString) {
        var date = new Date(utcDateString);
        return millisToUTCDate(date.getTime());
    };
});
