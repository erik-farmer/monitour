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

    ControllerFunction.$inject = [];

    function ControllerFunction() {
        var vm = this;
        this.site = "LIST";
    }

})();