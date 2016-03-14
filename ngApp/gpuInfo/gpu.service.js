(function(){
    'use strict';

    angular
        .module('app.gpus')
        .service('gpuService', serviceFunction);

    serviceFunction.$inject = ['$http'];

    function serviceFunction($http) {
        return {
            getGpus: getGpus
        };

        function getGpus() {
                return $http.get('json/gpuData.json').then(
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