(function () {

    angular
        .module('app.core')
        .config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function configFunction($locationProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'listView/list.html',
                controller: 'ListController',
                controllerAs: 'vm'
        });
    }

})();