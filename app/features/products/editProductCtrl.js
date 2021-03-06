(function () {
    'use strict';

    angular
        .module('routingDemo')
        .controller('editProductCtrl', editProductCtrl);

    /* @ngInject */
    function editProductCtrl($scope, $state, product, toastr, dataService, colors) {
        $scope.colors = colors;
        $scope.deleteProduct = deleteProduct;
        $scope.product = product;
        $scope.saveProduct = saveProduct;
        $scope.state = {
            formDisabled: false,
            mode: 'Edit',
            showDelete: true,
            showSave: true
        };



        /**=================PRIVATE======================**/

        function deleteProduct(product) {
            dataService.deleteProduct(product.$id);
            toastr.warning('You\'ve delete this product....I hope you\'re happy with yourself!');
            $state.go('products.list');
        }

        function saveProduct(product) {
            product.$save()
                .then(function () {
                    toastr.success('Update saved!');
                    $state.go('products.list');
                });
        }

    }
})();
