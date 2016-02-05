(function() {
    angular.module('punann')
        .directive('social', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/social.html',
                scope: {
                    items: '='
                }
            };
    });
})();
