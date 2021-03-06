(function () {
    'use strict';

    angular
        .module('routingDemo')
        .controller('createProductCtrl', createProductCtrl);

    /* @ngInject */
    function createProductCtrl($scope, $state, dataService, product, colors) {
        $scope.colors = colors;
        $scope.saveProduct = saveProduct;
        $scope.product = product;
        $scope.state = {
            formDisabled: false,
            mode: 'New',
            showDelete: false,
            showSave: true
        };

        /**=================PRIVATE======================**/
        function saveProduct(product) {
            dataService.addProduct(product)
                .then(function () {
                    $state.go('products.list');
                });
        }
    }
})();
