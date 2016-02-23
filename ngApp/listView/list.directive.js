(function() {
    'use strict';

    angular
        .module('app.list')
        .directive('listView', directiveFunction)
        .controller('ListController', ControllerFunction);

    directiveFunction.$inject = [];

    function directiveFunction() {

        var directive = {
            restict: 'E',
            templateUrl: 'listView/list.html',
            replace: true,
            scope: {},
            controller: 'ListController',
            controllerAs: 'vm'
        };

        return directive;
    }

    ControllerFunction.$inject = ['listService'];

    function ControllerFunction(listService) {

        var vm = this;
        vm.site = "LIST";
        vm.brands = {
            "Dell": true,
            "Asus": true,
            "Acer": true,
        };
        listService.getMonitors().then(function(data) {
            if (data.status == 200) {
                vm.monitors = data.data.monitors;
            }
        });

        vm.brandFilter = brandFilter;

        function brandFilter(monitor) {
            var brand = monitor.brand;
            if (vm.brands[brand] === true) {
                return monitor;
            } else {
                return false;
            }
        }

    }

})();