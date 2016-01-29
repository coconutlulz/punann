(function() {
    angular.module('punann')
        .controller('SynopsisController', ['$translate', function($translate) {
            var controller = this;
            $translate(['SYNOPSIS.P1',
                    'SYNOPSIS.P2',
                    'SYNOPSIS.P3',
                    'SYNOPSIS.P4',
                    'SYNOPSIS.P5',
                    'SYNOPSIS.SKILLS.HEADING',
                    'SYNOPSIS.SKILLS.DEV.HEADING',
                    'SYNOPSIS.SKILLS.DEV.SUB',
                    'SYNOPSIS.SKILLS.DEV.SECTION1',
                    'SYNOPSIS.SKILLS.OPS.HEADING',
                    'SYNOPSIS.SKILLS.OPS.SUB',
                    'SYNOPSIS.SKILLS.OPS.SECTION1',
                    'SYNOPSIS.SKILLS.OPS.SECTION2',
                    'SYNOPSIS.SKILLS.OPS.SECTION3',
                    'SYNOPSIS.SKILLS.OPS.SECTION4',
                    'SYNOPSIS.SKILLS.OTHER.HEADING',
                    'SYNOPSIS.SKILLS.OTHER.TECHWRITING',
                    'SYNOPSIS.ABILITIES.HEADING',
                    'SYNOPSIS.ABILITIES.LANGUAGES.HEADING',
                    'SYNOPSIS.ABILITIES.LANGUAGES.ENGLISH.NAME',
                    'SYNOPSIS.ABILITIES.LANGUAGES.ENGLISH.LEVEL',
                    'SYNOPSIS.ABILITIES.LANGUAGES.IRISH.NAME',
                    'SYNOPSIS.ABILITIES.LANGUAGES.IRISH.LEVEL',
                    'SYNOPSIS.ABILITIES.LANGUAGES.FINNISH.NAME',
                    'SYNOPSIS.ABILITIES.LANGUAGES.FINNISH.LEVEL'
            ]).then(function(translations) {
                controller.skills = [
                    {
                        heading: translations['SYNOPSIS.SKILLS.DEV.HEADING'],
                        sub: translations['SYNOPSIS.SKILLS.DEV.SUB'],
                        sections: [
                            {
                                heading: translations['SYNOPSIS.SKILLS.DEV.SECTION1'],
                                items: [
                                    {
                                        names: ['Python 2', 'Python 3'],
                                        subitems: ['SQLAlchemy', 'Alembic', 'Django', 'Pyramid']
                                    },
                                    {
                                        names: ['JavaScript'],
                                        subitems: ['AngularJS', 'jQuery']
                                    },
                                    {
                                        names: ['HTML5', 'CSS']
                                    },
                                    {
                                        names: ['C']
                                    },
                                    {
                                        names: ['C++'],
                                        subitems: ['Qt']
                                    },
                                    {
                                        names: ['Java']
                                    },
                                    {
                                        names: ['IDEs'],
                                        subitems: ['vim/neovim', 'PyCharm', 'CodeLite', 'Microsoft Visual Studio']
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        heading: translations['SYNOPSIS.SKILLS.OPS.HEADING'],
                        sub: translations['SYNOPSIS.SKILLS.OPS.SUB'],
                        sections: [
                            {
                                heading: translations['SYNOPSIS.SKILLS.OPS.SECTION1'],
                                items: [
                                ]
                            },
                            {
                                heading: translations['SYNOPSIS.SKILLS.OPS.SECTION2'],
                                items: [
                                ]
                            },
                            {
                                heading: translations['SYNOPSIS.SKILLS.OPS.SECTION3'],
                                items: [
                                ]
                            },
                            {
                                heading: translations['SYNOPSIS.SKILLS.OPS.SECTION4'],
                                items: [
                                ]
                            }
                        ]
                    },
                    {
                        heading: translations['SYNOPSIS.SKILLS.OTHER.HEADING'],
                        sections: [
                            translations['SYNOPSIS.SKILLS.OTHER.TECHWRITING']
                        ]
                    }
                ];

                controller.abilities = [
                    {
                        heading: translations['SYNOPSIS.ABILITIES.LANGUAGES.HEADING'],
                        languages: [
                            {
                                name: translations['SYNOPSIS.ABILITIES.LANGUAGES.ENGLISH.NAME'],
                                level: translations['SYNOPSIS.ABILITIES.LANGUAGES.ENGLISH.LEVEL']
                            },
                            {
                                name: translations['SYNOPSIS.ABILITIES.LANGUAGES.IRISH.NAME'],
                                level: translations['SYNOPSIS.ABILITIES.LANGUAGES.IRISH.LEVEL']
                            },
                            {
                                name: translations['SYNOPSIS.ABILITIES.LANGUAGES.FINNISH.NAME'],
                                level: translations['SYNOPSIS.ABILITIES.LANGUAGES.FINNISH.LEVEL']
                            }
                        ]
                    }
                ];
            });
        }])
})();
