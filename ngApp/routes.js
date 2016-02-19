(function () {
    angular
        .module('app.core')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'listView/list.html',
                controller: 'ListController',
                controllerAs: 'vm'
            })
    }
})();