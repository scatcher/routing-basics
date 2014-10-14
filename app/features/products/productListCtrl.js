(function () {
    'use strict';

    angular
        .module('routingDemo')
        .controller('productListCtrl', productListCtrl);

    /* @ngInject */
    function productListCtrl($scope, products) {
        /** Expose to the view */
        $scope.products = products;
        $scope.state = {
            filterText: ''
        };
    }

})();
