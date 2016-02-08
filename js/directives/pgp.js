(function() {
    angular.module('punann')
        .directive('pgp', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/pgp.html',
                scope: {
                    items: '='
                }
            };
    });
})();
