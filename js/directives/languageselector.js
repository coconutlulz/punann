(function() {
    angular.module('punann')
        .directive('languageSelector', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/languageselector.html',
                scope: {
                    items: '='
                }
            };
    });
})();
