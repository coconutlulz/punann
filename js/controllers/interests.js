(function() {
    angular.module('punann')
        .controller('InterestsController', ['$translate', function($translate) {
            var controller = this;
            $translate(['INTERESTS.COMPUTERS.HEADING',
                    'INTERESTS.COMPUTERS.TEXT',
                    'INTERESTS.MUSIC.HEADING',
                    'INTERESTS.MUSIC.TEXT',
                    'INTERESTS.SCIENCE.HEADING',
                    'INTERESTS.SCIENCE.TEXT',
                    'INTERESTS.LANGUAGES.HEADING',
                    'INTERESTS.LANGUAGES.TEXT',
                    'INTERESTS.CYCLING.HEADING',
                    'INTERESTS.CYCLING.TEXT'
            ]).then(function(translations) {
                controller.interests = [
                    {
                        heading: translations['INTERESTS.COMPUTERS.HEADING'],
                        text: translations['INTERESTS.COMPUTERS.TEXT']
                    },
                    {
                        heading: translations['INTERESTS.MUSIC.HEADING'],
                        text: translations['INTERESTS.MUSIC.TEXT']
                    },
                    {
                        heading: translations['INTERESTS.SCIENCE.HEADING'],
                        text: translations['INTERESTS.SCIENCE.TEXT']
                    },
                    {
                        heading: translations['INTERESTS.LANGUAGES.HEADING'],
                        text: translations['INTERESTS.LANGUAGES.TEXT']
                    },
                    {
                        heading: translations['INTERESTS.CYCLING.HEADING'],
                        text: translations['INTERESTS.CYCLING.TEXT']
                    }
                ];

                var root = 'INTERESTS';
                controller.translationIDs = [
                    {
                        heading: root + '.COMPUTERS.HEADING',
                        text: root + '.COMPUTERS.TEXT'
                    },
                    {
                        heading: root + '.MUSIC.HEADING',
                        text: root + '.MUSIC.TEXT'
                    },
                    {
                        heading: root + '.SCIENCE.HEADING',
                        text: root + '.SCIENCE.TEXT'
                    },
                    {
                        heading: root + '.LANGUAGES.HEADING',
                        text: root + '.LANGUAGES.TEXT'
                    },
                    {
                        heading: root + '.CYCLING.HEADING',
                        text: root + '.CYCLING.TEXT'
                    }
                ];
            })
        }])
.controller('InterestsController', ['$translate', function($translate) {
            var controller = this;
            $translate(['INTERESTS.COMPUTERS.HEADING',
                    'INTERESTS.COMPUTERS.TEXT',
                    'INTERESTS.MUSIC.HEADING',
                    'INTERESTS.MUSIC.TEXT',
                    'INTERESTS.SCIENCE.HEADING',
                    'INTERESTS.SCIENCE.TEXT',
                    'INTERESTS.LANGUAGES.HEADING',
                    'INTERESTS.LANGUAGES.TEXT',
                    'INTERESTS.CYCLING.HEADING',
                    'INTERESTS.CYCLING.TEXT'
            ]).then(function(translations) {
                controller.interests = [
                    {
                        heading: translations['INTERESTS.COMPUTERS.HEADING'],
                        text: translations['INTERESTS.COMPUTERS.TEXT']
                    },
                    {
                        heading: translations['INTERESTS.MUSIC.HEADING'],
                        text: translations['INTERESTS.MUSIC.TEXT']
                    },
                    {
                        heading: translations['INTERESTS.SCIENCE.HEADING'],
                        text: translations['INTERESTS.SCIENCE.TEXT']
                    },
                    {
                        heading: translations['INTERESTS.LANGUAGES.HEADING'],
                        text: translations['INTERESTS.LANGUAGES.TEXT']
                    },
                    {
                        heading: translations['INTERESTS.CYCLING.HEADING'],
                        text: translations['INTERESTS.CYCLING.TEXT']
                    }
                ];

                var root = 'INTERESTS';
                controller.translationIDs = [
                    {
                        heading: root + '.COMPUTERS.HEADING',
                        text: root + '.COMPUTERS.TEXT'
                    },
                    {
                        heading: root + '.MUSIC.HEADING',
                        text: root + '.MUSIC.TEXT'
                    },
                    {
                        heading: root + '.SCIENCE.HEADING',
                        text: root + '.SCIENCE.TEXT'
                    },
                    {
                        heading: root + '.LANGUAGES.HEADING',
                        text: root + '.LANGUAGES.TEXT'
                    },
                    {
                        heading: root + '.CYCLING.HEADING',
                        text: root + '.CYCLING.TEXT'
                    }
                ];
            })
        }])
})();
