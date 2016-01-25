(function() {
    angular.module('punann', ['ngAnimate', 'ui.router', 'pascalprecht.translate'])
        .config(['$logProvider', '$stateProvider', '$translateProvider', '$urlRouterProvider', function($logProvider, $stateProvider, $translateProvider, $urlRouterProvider) {
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

                        'formal@education': {
                            templateUrl: 'templates/partial-education-formal.html',
                            controller: 'EducationController',
                            controllerAs: 'eduCtrl'
                        },

                        'informal@education': {
                            templateUrl: 'templates/partial-education-informal.html',
                            controller: 'EducationController',
                            controllerAs: 'eduCtrl'
                        }
                    }
                });
        }]);
})();
