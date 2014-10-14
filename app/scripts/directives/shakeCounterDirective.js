(function () {
    'use strict';

    angular
        .module('routingDemo')
        .directive('shakeCounter', shakeCounter);

    function shakeCounter($timeout) {
        return {
            restrict: "A",
            replace: false,
            template: '<span class="label label-danger rotate" ng-bind="count"></span> ',
            scope: {
                count: "="
            },
            link: function (scope, element, attrs) {

                scope.$watch('count', function () {
                    $(element).effect({
                        effect: 'bounce',
                        duration: 800
                    });
                });
            }
        }
    }

})();
