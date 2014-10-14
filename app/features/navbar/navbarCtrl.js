(function () {
    'use strict';

    angular
        .module('routingDemo')
        .controller('navbarCtrl', navbarCtrl);

    /* @ngInject */
    function navbarCtrl($scope, FIREBASE_URI, $timeout, dataService) {
        /** Navbar state */
        $scope.state = {
            title: 'Routing Basics',
            userCount: '?'
        };

        /** These are the nav choices that appear in the top of the navbar */
        $scope.navOptions = [
            {label: 'Home', route: 'home', icon: 'fa fa-at'},
            {label: 'Products', route: 'products.list', icon: 'fa-home'},
            {label: 'New Product', route: 'products.create', icon: 'fa-plus'}
        ];



        /***========= Ignore this... just fun to see who's on ==========******/

        var listRef = new Firebase(FIREBASE_URI + 'presence/');
        var userRef = listRef.push();

        // Add ourselves to presence list when online.
        var presenceRef = new Firebase(FIREBASE_URI + '.info/connected');
        presenceRef.on("value", function (snap) {
            if (snap.val()) {
                userRef.set({
                    connected: new Date().getTime(),
                    browser: dataService.getUserNavigator()
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
