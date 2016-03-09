(function() {
    'use strict';

    angular
        .module('app.gpus')
        .directive('gpuInfo', directiveFunction)
        .controller('GpuController', ControllerFunction);

        directiveFunction.$inject = [];

        function directiveFunction() {

            var directive = {
                restrict: 'E',
                templateUrl: 'gpuInfo/index.html',
                replace: true,
                scope: {},
                controller: 'GpuController',
                controllerAs: 'vm'
            };

            return directive;

        }

        ControllerFunction.$inject = [];

        function ControllerFunction() {

            var vm = this;

        }

})();