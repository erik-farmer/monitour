(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('ListController', ControllerFunction);

    ControllerFunction.$inject = [];

    function ControllerFunction() {
        var vm = this;
        this.site = "LIST";
    }

})();