(function() {
    angular.module('punann', ['ngAnimate', 'ui.router', 'pascalprecht.translate'])
        .config(['$logProvider', '$stateProvider', '$translateProvider', '$urlRouterProvider', function($logProvider, $stateProvider, $translateProvider, $urlRouterProvider) {
            var english = {
                FORMALEDUCATION:
                {
                    DCU:
                    {
                        INSTITUTION: 'Dublin City University',
                        TITLE: 'BSc. (Hons.) in Computer Applications (Software Engineering)',
                        DATERANGE: '2005 to 2010',
                        GRADEDESCRIPTION: 'Higher second-class honours',
                        NOTES: ''
                    },

                    OU:
                    {
                        INSTITUTION: 'The Open University',
                        TITLE: 'BSc. (Hons.) in Natural Sciences (Chemistry)',
                        DATERANGE: '2011 to 2018 (estimated)',
                        GRADE: 'Distinction',
                        GRADEDESCRIPTION: '(Latest)',
                        NOTES: ''
                    }
                },
                INFORMALEDUCATION:
                {
                    CNAG:
                    {
                        INSTITUTION: 'The Gaelic League',
                        TITLE1: 'Irish Language - Higher Level 1',
                        TITLE2: 'Irish Language - Medium Level 2',
                        TITLE3: 'Irish Language - Medium Level 1',
                        DATERANGE1: 'January to March, 2015',
                        DATERANGE2: 'April to June, 2015',
                        DATERANGE3: 'September to November, 2015',
                        NOTES: ''
                    }
                }
            };

            var irish = {
                FORMALEDUCATION:
                {
                    DCU:
                    {
                        INSTITUTION: 'Ollscoil Ċathair Ḃaile Átha Cliaṫ',
                        TITLE: 'Céim Ḃaitsiléara Eolaíoċta (Gradaim) i ḃFeiḋmċláir Ríoṁaireaċta (Innealtóireaċt Bogearraí)',
                        DATERANGE: '2005 go 2010',
                        GRADEDESCRIPTION: 'Higher second-class honours',
                        NOTES: ''
                    },

                    OU:
                    {
                        INSTITUTION: 'An Ollscoil Oscailte',
                        TITLE: 'Céim Ḃaitsiléara Eolaíoċta (Gradaim) in Eolaíoċtaí Aiceanta (An Ċeimic)',
                        DATERANGE: '2011 go 2018 (meastaċán)',
                        GRADE: 'Gradam',
                        GRADEDESCRIPTION: '(Is déanaí)',
                        NOTES: ''
                    }
                },
                INFORMALEDUCATION:
                {
                    CNAG:
                    {
                        INSTITUTION: 'Conraḋ na Gaeilge',
                        TITLE1: 'Ardrang 1',
                        TITLE2: 'Meánrang 2',
                        TITLE3: 'Meánrang 1',
                        DATERANGE1: 'Eanáir go Márta, 2015',
                        DATERANGE2: 'Aibreán go Meiṫeaṁ, 2015',
                        DATERANGE3: 'Deireaḋ Fóṁair go Saṁain, 2015',
                        NOTES: ''
                    }
                }
            };

            $translateProvider
                .translations('en', english)
                .translations('ga', irish)
                .useSanitizeValueStrategy('escape')
                .preferredLanguage('en');

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
