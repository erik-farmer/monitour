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

        ControllerFunction.$inject = ["gpuService"];

        function ControllerFunction(gpuService) {

            var vm = this;
            gpuService.getGpus().then(function(data) {
                if (data.status == 200) {
                    vm.gpus = data.data.gpus;
                }
            });

        }

})();