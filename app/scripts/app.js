'use strict';

/**
 * @ngdoc overview
 * @name routingDemo
 * @description
 * # routingDemo
 *
 * Main module of the application.
 */
angular
    .module('routingDemo', [
        //Angular Components
        'ngSanitize',
        'ngAnimate',

        //Angular UI
        'ui.router',

//    //Plugins
        'firebase',
        'ngFx',
        'toastr',
        'angular.filter'
    ])
    .config(function (toastrConfig) {
        /** Set the default toast location */
        toastrConfig.positionClass = 'toast-bottom-right';

    });

