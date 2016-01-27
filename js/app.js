(function() {
    angular.module('punann', ['ngAnimate', 'ui.router', 'pascalprecht.translate'])
        .config(['$logProvider', '$stateProvider', '$translateProvider', '$urlRouterProvider', function($logProvider, $stateProvider, $translateProvider, $urlRouterProvider) {
            var english = {
                SYNOPSIS:
                {
                    P1: 'My name is David and I am a person from Dublin, Ireland. From time to time I have been known as a software engineer. Thanks for taking the time to read my site.',
                    P2: 'I have worked variously as a network engineer, a system administrator, an intern, a junior developer, a senior developer and a contractor. My industry experience ranges from small companies providing services to local clients; to start-ups; to trans-national giants of the games industry, working on the technology that powers AAA titles; to voluntary contributions to free software projects.',
                    P3: 'Computers are interesting, if you think about it; they are an interface that gives us the ability to manipulate electrons into doing nearly instantaneous mathematical calculations and processing unimaginable amounts of data. For most of human history, our inventions have focussed on making up for our abilities that couldn\'t perform as well as we needed. The brain is still very much mysterious, but the computer has given us the ability to - for the first time - augment its processing capability in a form of symbiosis. We are bad at maths; computers excel at maths. Computers are bad at heuristics; we excel at heuristics.',
                    P4: 'That is interesting, isn\'t it?',
                    P5: 'I am available for various forms of work - full-stack development and system administration - at very competitive rates.',
                },
                SKILLS:
                {
                    HEADING: 'Skills',
                    DEV:
                    {
                        HEADING: 'Development',
                        SUB: 'Full-Stack',
                        SECTION1: 'Languages, Frameworks and Libraries',
                    },
                    OPS:
                    {
                        HEADER: 'Operations',
                        SUB: 'System Administration and Network Engineering',
                        SECTION1: 'Operating Systems',
                        SECTION2: 'Services',
                        SECTION3: 'Networking',
                        SECTION4: 'Security'
                    }
                },
                ABILITIES:
                {
                    HEADING: 'Abilities',
                    LANGUAGES:
                    {
                        HEADING: 'Languages',
                        ENGLISH: 'English',
                        IRISH: 'Irish',
                        FINNISH: 'Finnish'
                    }
                },
                PROEXPERIENCE: {
                    AL:
                    {
                        TITLE: 'Software Engineer (Full-Stack) and System Administrator',
                        DATERANGE: 'October 2015 to present',
                        DUTIES:
                        {
                            DESCRIPTION1: 'Provide software engineering and system administration services to external clients.',
                            TECHNOLOGIES1: 'Technologies used vary by client.'
                        }
                    },
                    TAILIFY:
                    {
                        TITLE: 'Senior Software Engineer (Back-End) and System Administrator',
                        DATERANGE: 'October 2014 to October 2015',
                        DUTIES: 
                        {
                            DESCRIPTION1: 'Software architect and senior developer for all of Tailify\'s back-end services and social media interfaces, including test suites.',
                            DESCRIPTION2: 'Database design, administration and back-ups.',
                            DESCRIPTION3: 'Design and maintenance of fault-tolerant, scalable infrastructure that is capable of handling massive volumes of data.',
                            DESCRIPTION4: 'RESTful and non-RESTful API development; remote task management.',
                            DESCRIPTION5: 'Maintenance of internal services.',
                            DESCRIPTION6: 'Internal security policy and enforcement.',
                            DESCRIPTION7: 'Thorough documentation.'
                        }
                    },
                    DW:
                    {
                        TITLE: 'Junior Software Engineer',
                        DATERANGE: 'September 2012 to September 2014',
                        DUTIES: 
                        {
                            DESCRIPTION1: 'Development and maintenance of online services, including: lobby services, match-making, cheat detection, data storage etc.',
                            DESCRIPTION2: 'Development and maintenance of client-side library for Demonware services.',
                            DESCRIPTION3: 'Leading an investigation into the replacement of a key proprietary technology with a free/libre alternative.',
                            DESCRIPTION4: 'Build engineering: automated building and testing.',
                            DESCRIPTION5: 'Documentation: installation guides, run-books for SREs.'
                        }
                    },
                    KERNA:
                    {
                        TITLE: 'Network and Security Engineer',
                        DATERANGE: 'September 2010 to May 2012',
                        DUTIES: 
                        {
                            DESCRIPTION1: 'Network engineering.',
                            DESCRIPTION2: 'Formulation and maintenance of security policies for external clients.',
                            DESCRIPTION3: 'Monitoring, intrusion detection, auditing, diagnostics.',
                            DESCRIPTION4: 'System administration.',
                            DESCRIPTION5: 'Web hosting.',
                            DESCRIPTION6: 'E-mail hosting, spam filtering, virus detection.',
                            DESCRIPTION7: 'DNS hosting and configuration.',
                            DESCRIPTION8: 'Interacting with a high volume of customers; mostly via phone and e-mail, but with on-site visits to offices, server rooms and data centres.'
                        }
                    },
                    STREAM:
                    {
                        TITLE: 'Eircom ADSL Technical Support Agent',
                        DATERANGE: 'April 2008 to May 2008'
                    },
                    SBS:
                    {
                        TITLE: 'IT Department Contractor',
                        DATERANGE: 'July 2005 to September 2005; July 2006'
                    }
                },
                VOLEXPERIENCE: {
                    FSTRANSLATOR:
                    {
                        ORGANISATION: 'Free Software',
                        TITLE: 'English to Irish Translator',
                        DATERANGE: 'September 2015 to present',
                        DUTIES:
                        {
                            DESCRIPTION1: 'Lollypop music player',
                            DESCRIPTION2: 'VLC media player'
                        }
                    },
                    FS:
                    {
                        ORGANISATION: 'Free Software',
                        TITLE: 'Software Developer',
                        DATERANGE: 'October 2015 to present',
                        DUTIES:
                        {
                            DESCRIPTION1: 'Clementine music player'
                        }
                    }
                },
                FORMALEDUCATION:
                {
                    OU:
                    {
                        INSTITUTION: 'The Open University',
                        TITLE: 'BSc. (Hons.) in Natural Sciences (Chemistry)',
                        DATERANGE: '2011 to 2018 (estimated)',
                        GRADE: 'Distinction',
                        GRADEDESCRIPTION: '(Latest)',
                        NOTES: ''
                    },
                    DCU:
                    {
                        INSTITUTION: 'Dublin City University',
                        TITLE: 'BSc. (Hons.) in Computer Applications (Software Engineering)',
                        DATERANGE: '2005 to 2010',
                        GRADEDESCRIPTION: 'Higher second-class honours',
                        NOTES: ''
                    },
                    LC:
                    {
                        INSTITUTION: 'Coolmine Community School, Clonsilla, Dublin 15',
                        TITLE: 'Leaving Certificate',
                        DATERANGE: '2000 to 2005',
                        GRADEDESCRIPTION: '',
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
                SYNOPSIS:
                {
                    P1: 'Is mise David agus is as Áth Cliath dom.',
                    P2: 'Bhí mé i m\'innealtóir líonra, mo riarthóir córais, m\'intéirneach, m\'fhorbróir sóisearach, m\'ard-fhorbróir agus m\'oibrí ar conradh. Baineann mo thaithí tionscail le comhlachtaí beaga ag cuir séirbhísí do chliaint áitiúla; le gnólachtaí nuathionscanta; le comhlachtaí trasnáisiúnta de thionscal na gcluichí ríomhaireachta, ag obair ar theicneolaíocht a sholáthraíonn chumhacht do chluichí AAA; le síntiúis do shaorearraí.',
                    P3: 'Tá ríomhairí suimiúil, má smaoinítear orthu; tá siad mar droichead eadrainn agus idir an domhan fo-adamhach, chun é a ionramháil le fadhbanna mhóra a réiteach agus chun sonraí ollmhóra a phróiseáil. Ar feadh an chuid is mó dár stair, cruthaíomar aireagáin chun ár gcumas a fheabhsú. Tá an inchinn fós rúndiamhair, ach buíochas le ríomhairí, is féidir linn a hachmainn táirgthe a chuidiú. Táimid go dona ag an matamaitic; tá ríomhairí ar feabhas aici. Tá siad go huafásach ag heorastaic; déantar ár n-inchinn dóibh.',
                    P4: 'Suimiúil, nach bhfuil sé?',
                    P5: 'Táim le hobair éagsúil - forbairt lán-chruachaiche agus riarachán córais - ag táillí iomaíocha.'
                },
                PROEXPERIENCE: {
                    AL:
                    {
                        TITLE: 'Innealtóir Bogearraí (Full-Stack) agus ',
                        DATERANGE: 'Deireadh Fómhair 2015 go láithreach',
                        DUTIES:
                        {
                            DESCRIPTION1: 'Provide software engineering and system administration services to external clients.',
                            TECHNOLOGIES1: 'Technologies used vary by client.'
                        }
                    },
                    TAILIFY:
                    {
                        TITLE: 'Senior Software Engineer (Back-End) and System Administrator',
                        DATERANGE: 'October 2014 to October 2015',
                        DUTIES: 
                        {
                            DESCRIPTION1: 'Software architect and senior developer for all of Tailify\'s back-end services and social media interfaces, including test suites.',
                            DESCRIPTION2: 'Database design, administration and back-ups.',
                            DESCRIPTION3: 'Design and maintenance of fault-tolerant, scalable infrastructure that is capable of handling massive volumes of data.',
                            DESCRIPTION4: 'RESTful and non-RESTful API development; remote task management.',
                            DESCRIPTION5: 'Maintenance of internal services.',
                            DESCRIPTION6: 'Internal security policy and enforcement.',
                            DESCRIPTION7: 'Thorough documentation.'
                        }
                    },
                    DW:
                    {
                        TITLE: 'Junior Software Engineer',
                        DATERANGE: 'September 2012 to September 2014',
                        DUTIES: 
                        {
                            DESCRIPTION1: 'Development and maintenance of online services, including: lobby services, match-making, cheat detection, data storage etc.',
                            DESCRIPTION2: 'Development and maintenance of client-side library for Demonware services.',
                            DESCRIPTION3: 'Leading an investigation into the replacement of a key proprietary technology with a free/libre alternative.',
                            DESCRIPTION4: 'Build engineering: automated building and testing.',
                            DESCRIPTION5: 'Documentation: installation guides, run-books for SREs.'
                        }
                    },
                    KERNA:
                    {
                        TITLE: 'Network and Security Engineer',
                        DATERANGE: 'September 2010 to May 2012',
                        DUTIES: 
                        {
                            DESCRIPTION1: 'Network engineering.',
                            DESCRIPTION2: 'Formulation and maintenance of security policies for external clients.',
                            DESCRIPTION3: 'Monitoring, intrusion detection, auditing, diagnostics.',
                            DESCRIPTION4: 'System administration.',
                            DESCRIPTION5: 'Web hosting.',
                            DESCRIPTION6: 'E-mail hosting, spam filtering, virus detection.',
                            DESCRIPTION7: 'DNS hosting and configuration.',
                            DESCRIPTION8: 'Interacting with a high volume of customers; mostly via phone and e-mail, but with on-site visits to offices, server rooms and data centres.'
                        }
                    },
                    STREAM:
                    {
                        TITLE: 'Eircom ADSL Technical Support Agent',
                        DATERANGE: 'April 2008 to May 2008'
                    },
                    SBS:
                    {
                        TITLE: 'IT Department Contractor',
                        DATERANGE: 'July 2005 to September 2005; July 2006'
                    }
                },
                VOLEXPERIENCE: {
                    FSTRANSLATOR:
                    {
                        ORGANISATION: 'Bogearraí Saor',
                        TITLE: 'Aistritheoir (An Ghaeilge go dtí Béarla)',
                        DATERANGE: 'September 2015 to present',
                        DUTIES:
                        {
                            DESCRIPTION1: 'Lollypop music player',
                            DESCRIPTION2: 'VLC media player'
                        }
                    },
                    FS:
                    {
                        ORGANISATION: 'Free Software',
                        TITLE: 'Software Developer',
                        DATERANGE: 'October 2015 to present',
                        DUTIES:
                        {
                            DESCRIPTION1: 'Clementine music player'
                        }
                    }
                },

                FORMALEDUCATION:
                {
                    OU:
                    {
                        INSTITUTION: 'An Ollscoil Oscailte',
                        TITLE: 'Céim Bhaitsiléara Eolaíochta (Gradaim) in Eolaíochtaí Aiceanta (An Cheimic)',
                        DATERANGE: '2011 go 2018 (meastachán)',
                        GRADE: 'Gradam',
                        GRADEDESCRIPTION: '(Is déanaí)',
                        NOTES: ''
                    },
                    DCU:
                    {
                        INSTITUTION: 'Ollscoil Chathair Bhaile Átha Cliath',
                        TITLE: 'Céim Bhaitsiléara Eolaíochta (Gradaim) i bhFeidhmchláir Ríomhaireachta (Innealtóireacht Bogearraí)',
                        DATERANGE: '2005 go 2010',
                        GRADEDESCRIPTION: 'Dara honóracha sinsearacha',
                        NOTES: ''
                    },
                    LC:
                    {
                        INSTITUTION: 'Scoil Phobail Chúil Mhín, Cluain Saileach, Áth Cliath 15',
                        TITLE: 'Ardteist',
                        DATERANGE: '2000 go 2005',
                        GRADEDESCRIPTION: '',
                        NOTES: ''
                    }
                },
                INFORMALEDUCATION:
                {
                    CNAG:
                    {
                        INSTITUTION: 'Conradh na Gaeilge',
                        TITLE1: 'Ardrang 1',
                        TITLE2: 'Meánrang 2',
                        TITLE3: 'Meánrang 1',
                        DATERANGE1: 'Eanáir go Márta, 2015',
                        DATERANGE2: 'Aibreán go Meitheamh, 2015',
                        DATERANGE3: 'Deireadh Fómhair go Samhain, 2015',
                        NOTES: ''
                    }
                }
            };

            $translateProvider
                .translations('en', english)
                .translations('ga', irish)
                .useSanitizeValueStrategy('escape')
                //.determinePreferredLanguage();
                .preferredLanguage('ga');

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
                .state('synopsis', {
                    url: '/synopsis',
                    views: {
                        '': {
                                templateUrl: 'templates/partial-synopsis.html',
                                controller: 'SynopsisController',
                                controllerAs: 'synCtrl'
                            }
                    }
                })
                .state('experience', {
                    url: '/experience',
                    views: {
                        '': { templateUrl: 'templates/partial-experience.html' },

                        'professional@experience': {
                            templateUrl: 'templates/partial-experience-professional.html',
                            controller: 'ExperienceController',
                            controllerAs: 'expCtrl'
                        },

                        'voluntary@experience': {
                            templateUrl: 'templates/partial-experience-voluntary.html',
                            controller: 'ExperienceController',
                            controllerAs: 'expCtrl'
                        }
                    }
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
