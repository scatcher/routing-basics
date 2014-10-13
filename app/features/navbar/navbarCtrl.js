(function () {
    'use strict';

    angular
        .module('routingDemo')
        .controller('navbarCtrl', navbarCtrl);

    /* @ngInject */
    function navbarCtrl($scope, FIREBASE_URI, $timeout) {
        $scope.state = {
            title: 'Routing Basics',
            userCount: '?'
        };

        $scope.navOptions = [
            {label: 'Products', route: 'home', icon: 'fa-home'},
            {label: 'Create', route: 'product.create', icon: 'fa-plus'},
            {label: 'About', route: 'about', icon: 'fa fa-at'}
        ];

        /***** Ignore this **********/

        var listRef = new Firebase(FIREBASE_URI + 'presence/');
        var userRef = listRef.push();

        // Add ourselves to presence list when online.
        var presenceRef = new Firebase(FIREBASE_URI + '.info/connected');
        presenceRef.on("value", function (snap) {
            if (snap.val()) {
                userRef.set({
                    connected: new Date().getTime(),
                    browser: navigator.userAgent
                });
                // Remove ourselves when we disconnect.
                userRef.onDisconnect().remove();
            }
        });

        // Number of online users is the number of objects in the presence list.
        listRef.on("value", function (snap) {
            $timeout(function () {
                $scope.state.userCount = snap.numChildren();
                console.log("Online " + snap.numChildren());
            }, 10);
        });


    }
})();
