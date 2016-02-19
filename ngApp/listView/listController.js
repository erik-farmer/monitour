(function() {
    'use strict';

    angular
        .module('app.list')
        .controller('ListController', ControllerFunction);

    ControllerFunction.$inject = [];

    function ControllerFunction() {
        var vm = this;
        this.site = "LIST";
    }

})();