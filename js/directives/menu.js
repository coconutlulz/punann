(function() {
    angular.module('punann')
        .directive('topMenu', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/menu.html',
                scope: {
                    items: '='
                }
            };
    });
})();
