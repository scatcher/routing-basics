(function () {
    'use strict';

    angular.module('routingDemo')
        /** Let angular know about lodash */
        .constant('_', _)
        /** Set location of our firebase URI for use throughout the app */
        .constant('FIREBASE_URI', 'https://routing-basics-demo.firebaseio.com/');

})();
