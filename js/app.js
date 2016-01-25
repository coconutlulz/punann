(function() {
    angular.module('punann', ['ngAnimate'])
        .config(['$logProvider', function($logProvider) {
            $logProvider.debugEnabled(true);
        }]);
})();
