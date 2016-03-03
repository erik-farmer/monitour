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
        vm.filter = {};
        vm.filterByProperties = filterByProperties;

        listService.getMonitors().then(function(data) {
            if (data.status == 200) {
                vm.monitors = data.data.monitors;
            }
        });

        function filterByProperties(monitor) {
            var matches = true;
            for (var prop in vm.filter) {
                // brand, panel, refresh rate, etc.
                if (noSubFilter(vm.filter[prop])) continue;
                if (!vm.filter[prop][monitor[prop]]) {
                    matches = false;
                    break;
                }
            }
            return matches;
        }

        function noSubFilter(subFilterObj) {
            for (var key in subFilterObj) {
                // The item's actual property
                if (subFilterObj[key]) return false;
            }
            return true;
        }

    }

})();