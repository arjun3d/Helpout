    /**
     * @ngdoc directive
     * @name ui.aabNotificationBlock.aabNotificationBlock:aabNotificationBlock
     * @restrict E
     * @param {String} text (required) The translation tridion key(or)text that is to be shown in the notification.
     * @param {String} type (required) Type of notification to be shown. Values: info, warning, alert or success.
     * @param {string} detailsLink (optional) The link text for the anchor tag that refers to details about the notification
     * @param {string} detailsUrl (optional) The reference url for detailsLink that refers to details about the notification
     *
     * @description
     * The <code>aab-notification-block</code> is a component that presents a notification block.
     * There are four types of notification blocks to use in the proper context: success, info, warning and danger.
     * It contains a symbol representing the notification type. A brief description of the notification message and optionally a link that links to a more detailed description of the notification.
     * Each notification block has a close button on the right.
     *
     * @example
     * <aab-notification-block type="warning" text="my-notification-translation-key" details-link="bekijk details" details-url="https://www.abnamro.com"></aab-notification-block>
     *
     * NOTE : The below directive has been added from the oca/app/components/ui/  and has been tailored to be used in LiWid
     *
     */


     'use strict';
     angular
     .module('LiWidDirectives')
     .directive('aabNotificationBlock', aabNotificationBlock);

     function aabNotificationBlock() {
        return {
            restrict: 'E',
            scope: {
                messageKey: '@',
                messageText: '@',
                type: '@',
                detailsLink: '@',
                detailsUrl: '@'
            },
            templateUrl: '<alert ng-if="aabNotificationBlockController.showNotification" type="{{type}}" class="well-notification">'+
            ' <button class="ocf-btn-icon glyphicon ocf-icon-close-alt notification-close" ng-click="aabNotificationBlockController.closeNotification()" data-testid="notification-icon"></button>'
            +' <span class="glyphicon" ng-class="aabNotificationBlockController.iconClass" data-testid="notification-icon2" title="{{messageKey}}"></span>'
            +' <p>{{messageKey|translate}} <a ng-if="aabNotificationBlockController.showDetailsLink" href="{{detailsUrl}}">{{detailsLink}}</a></p></alert>',
            controller: function($scope) {
                var self = this;
                self.type = $scope.type;
                self.showNotification = true;
                self.showDetailsLink = false;
                self.isMessageKeyPresent = false;
                self.iconClass = 'glyphicon ocf-notification-' + self.type + '-icon';

                self.closeNotification = function(){
                    self.showNotification = false;
                }

                // show details link when defined
                if(angular.isDefined($scope.detailsLink) || $scope.detailsLink !== "") {
                    self.showDetailsLink = true;
                }
                if(angular.isDefined($scope.messageKey) || $scope.messageKey !== "") {
                    self.isMessageKeyPresent = true;   
                }

            },
            controllerAs: 'aabNotificationBlockController'
        };
    }

