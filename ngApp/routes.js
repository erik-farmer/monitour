(function () {

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function configFunction($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<list-view></list-view>',
            });
    }

})();