(function() {
    'use strict';

    angular.module('app.core', [
        'ui.router',
        'app.list',
        'app.gpus',
    ]);

})();


(function() {
    'use strict';

    angular
        .module('app.core')
        .run(runBlock);

    runBlock.$inject = ['$rootScope', '$location', '$window'];

    function runBlock($rootScope, $location, $window) {
        $rootScope
            .$on('$stateChangeSuccess',
                function(event){

                    if (!$window.ga || $location.host() == 'localhost') {
                        return;
                    }

                    $window.ga('send', 'pageview', { page: $location.path() });
          });
    }
})();