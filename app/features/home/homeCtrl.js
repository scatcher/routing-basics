(function () {
    'use strict';

    angular
        .module('routingDemo')
        .controller('homeCtrl', homeCtrl);

    /* @ngInject */
    function homeCtrl($scope, $firebase, FIREBASE_URI, dataService) {

        $scope.state = {
            userName: ''
        };
        $scope.addMessage = addMessage;
        $scope.getCurrentUrl = getCurrentUrl;
        var discussionRef = new Firebase(FIREBASE_URI + 'discussion').limit(20);
        $scope.messages = $firebase(discussionRef).$asObject();


        /**********PRIVATE**************/

        function addMessage () {
            console.log(discussionRef);

            var userName = $scope.state.userName.length > 0 ? $scope.state.userName : 'Anonymous';
            var discussionArray = $firebase(discussionRef).$asArray();
            discussionArray.$add({
                user: userName,
                message: $scope.state.message,
                datetime: new Date().getTime(),
                browser: dataService.getUserNavigator()
            });
            $scope.state.message = '';
        }

        /** Simple helper for discussion that displays the local network address to join the demo */
        function getCurrentUrl() {
            var url = window.location.href;
            return url.split('/#')[0];
        }

    }
})();
