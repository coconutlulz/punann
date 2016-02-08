(function() {
    angular.module('punann')
        .directive('emailAddress', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/emailaddress.html',
                scope: {
                    items: '='
                }
            };
    });
})();
