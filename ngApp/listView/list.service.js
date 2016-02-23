(function(){
    'use strict';

    angular
        .module('app.list')
        .service('listService', serviceFunction);

    serviceFunction.$inject = ['$http'];

    function serviceFunction($http) {
        return {
            getMonitors: getMonitors
        };

        function getMonitors() {
                return $http.get('json/monitorData.json').then(
                    function(successResponse) {
                        return successResponse;
                    },
                    function(failureResponse) {
                        return failureResponse;
                    }
                );
            }
    }

})();