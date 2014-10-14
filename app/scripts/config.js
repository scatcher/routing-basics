(function () {
    'use strict';

    angular
        .module('routingDemo')
        .config(function (toastrConfig) {
            /** Set the default toast location */
            toastrConfig.positionClass = 'toast-bottom-right';

        });
})();
