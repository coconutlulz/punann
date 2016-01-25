(function() {
    angular.module('punann', ['ngAnimate', 'ui.router'])
        .config(['$logProvider', '$stateProvider', '$urlRouterProvider', function($logProvider, $stateProvider, $urlRouterProvider) {
            $logProvider.debugEnabled(true);

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'templates/partial-home.html'
                })
                .state('home.list', {
                    url: '/list',
                    templateUrl: 'templates/partial-home-list.html',
                    controller: function($scope) {
                        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                    }
                })
                .state('home.paragraph', {
                    url: '/paragraph',
                    template: 'Booze me.'
                })
                .state('education', {
                    url: '/education',
                    views: {
                        '': { templateUrl: 'templates/partial-education.html' },

                        'formal@about': { template: 'aaaahl' },

                        'informal@about': { template: 'Look! I am a column!' }
                    }
                });
        }]);
})();
