(function() {
    angular.module('punann')
        .service('nameService', function() {
            this.firstName = 'David';
            this.fade = false;

            this.nameIndex = 0;
            this.surnames = [
                'Lynam',
                'Ó Laıġeanáın'
            ];

            this.getFirstName = function() {
                return this.firstName;
            };

            this.getCurrentSurname = function() {
                return this.surnames[this.nameIndex];
            };

            this.getNextSurname = function() {
                return this.surnames[(this.nameIndex + 1) % this.surnames.length];
            };

            this.getFade = function() {
                return this.fade;
            };

            this.setCurrentSurname = function(surname) {
                this.currentSurname = surname;
            };

            this.setNextSurname = function(surname) {
                this.nextSurname = surname;
            };

            this.shiftNameIndex = function() {
                this.nameIndex = (this.nameIndex + 1) % this.surnames.length;
            };

            this.toggleFade = function() {
                this.fade = !this.fade;
            };
        })
        .controller('NameController', ['$interval', 'nameService', function($interval, nameService) {
            this.firstName = nameService.getFirstName();

            this.getCurrentSurname = function() {
                return nameService.getCurrentSurname();
            };

            this.getFade = function() {
                return nameService.getFade();
            };

            function fadeNextName() {
                nameService.toggleFade();
                nameService.shiftNameIndex();
            }

            $interval(fadeNextName, 5000);
        }])
        .controller('MenuController', ['$translate', function($translate) {
            var controller = this;
            $translate(['MENU.SYNOPSIS',
                    'MENU.INTERESTS',
                    'MENU.EXPERIENCE',
                    'MENU.EDUCATION'
            ]).then(function(translations) {
                controller.menu = [
                    {
                        label: translations['MENU.SYNOPSIS'],
                        link: '.synopsis'
                    },
                    {
                        label: translations['MENU.INTERESTS'],
                        link: '.interests'
                    },
                    {
                        label: translations['MENU.EXPERIENCE'],
                        link: '.experience'
                    },
                    {
                        label: translations['MENU.EDUCATION'],
                        link: '.education'
                    }
                ];
            });
        }])
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
        .controller('ExperienceController', ['$translate', function($translate) {
            var controller = this;
            $translate(['EXPERIENCE.PROFESSIONAL.AL.TITLE',
                    'EXPERIENCE.PROFESSIONAL.AL.DATERANGE',
                    'EXPERIENCE.PROFESSIONAL.AL.DUTIES.DESCRIPTION1',
                    'EXPERIENCE.PROFESSIONAL.AL.DUTIES.TECHNOLOGIES1',
                    'EXPERIENCE.PROFESSIONAL.TAILIFY.TITLE',
                    'EXPERIENCE.PROFESSIONAL.TAILIFY.DATERANGE',
                    'EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION1',
                    'EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION2',
                    'EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION3',
                    'EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION4',
                    'EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION5',
                    'EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION6',
                    'EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION7',
                    'EXPERIENCE.PROFESSIONAL.DW.TITLE',
                    'EXPERIENCE.PROFESSIONAL.DW.DATERANGE',
                    'EXPERIENCE.PROFESSIONAL.DW.DUTIES.DESCRIPTION1',
                    'EXPERIENCE.PROFESSIONAL.DW.DUTIES.DESCRIPTION2',
                    'EXPERIENCE.PROFESSIONAL.DW.DUTIES.DESCRIPTION3',
                    'EXPERIENCE.PROFESSIONAL.DW.DUTIES.DESCRIPTION4',
                    'EXPERIENCE.PROFESSIONAL.DW.DUTIES.DESCRIPTION5',
                    'EXPERIENCE.PROFESSIONAL.KERNA.TITLE',
                    'EXPERIENCE.PROFESSIONAL.KERNA.DATERANGE',
                    'EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION1',
                    'EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION2',
                    'EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION3',
                    'EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION4',
                    'EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION5',
                    'EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION6',
                    'EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION7',
                    'EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION8',
                    'EXPERIENCE.PROFESSIONAL.STREAM.TITLE',
                    'EXPERIENCE.PROFESSIONAL.STREAM.DATERANGE',
                    'EXPERIENCE.PROFESSIONAL.SBS.TITLE',
                    'EXPERIENCE.PROFESSIONAL.SBS.DATERANGE',
                    'EXPERIENCE.VOLUNTARY.FSTRANSLATOR.ORGANISATION',
                    'EXPERIENCE.VOLUNTARY.FSTRANSLATOR.TITLE',
                    'EXPERIENCE.VOLUNTARY.FSTRANSLATOR.DATERANGE',
                    'EXPERIENCE.VOLUNTARY.FSTRANSLATOR.DUTIES.DESCRIPTION1',
                    'EXPERIENCE.VOLUNTARY.FSTRANSLATOR.DUTIES.DESCRIPTION2',
                    'EXPERIENCE.VOLUNTARY.FS.ORGANISATION',
                    'EXPERIENCE.VOLUNTARY.FS.TITLE',
                    'EXPERIENCE.VOLUNTARY.FS.DATERANGE',
                    'EXPERIENCE.VOLUNTARY.FS.DUTIES.DESCRIPTION1'
            ]).then(function(translations) {
                controller.voluntary = [
                    {
                        organisation: translations['EXPERIENCE.VOLUNTARY.FSTRANSLATOR.ORGANISATION'],
                        title: translations['EXPERIENCE.VOLUNTARY.FSTRANSLATOR.TITLE'],
                        dateRange: translations['EXPERIENCE.VOLUNTARY.FSTRANSLATOR.DATERANGE'],
                        duties: [
                            {
                                description: translations['EXPERIENCE.VOLUNTARY.FSTRANSLATOR.DUTIES.DESCRIPTION1'],
                                technologies: [
                                    'Transifex'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.VOLUNTARY.FSTRANSLATOR.DUTIES.DESCRIPTION2'],
                                technologies: [
                                    'Transifex'
                                ]
                            }
                        ]
                    },
                    {
                        organisation: translations['EXPERIENCE.VOLUNTARY.FS.ORGANISATION'],
                        title: translations['EXPERIENCE.VOLUNTARY.FS.TITLE'],
                        dateRange: translations['EXPERIENCE.VOLUNTARY.FS.DATERANGE'],
                        duties: [
                            {
                                description: translations['EXPERIENCE.VOLUNTARY.FS.DUTIES.DESCRIPTION1'],
                                technologies: [
                                    'C++',
                                    'Qt'
                                ]
                            }
                        ]
                    }
                ]
                controller.professional = [
                    {
                        organisation: 'The Analyst Lounge',
                        link: 'http://www.theanalystlounge.com',
                        title: translations['EXPERIENCE.PROFESSIONAL.AL.TITLE'],
                        dateRange: translations['EXPERIENCE.PROFESSIONAL.AL.DATERANGE'],
                        duties: [
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.AL.DUTIES.DESCRIPTION1'],
                                description: translations['EXPERIENCE.PROFESSIONAL.AL.DUTIES.TECHNOLOGIES1']
                            }
                        ]
                    },
                    {
                        organisation: 'Tailify',
                        link: 'http://www.tailify.com',
                        title: translations['EXPERIENCE.PROFESSIONAL.TAILIFY.TITLE'],
                        dateRange: translations['EXPERIENCE.PROFESSIONAL.TAILIFY.DATERANGE'],
                        duties: [
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION1'],
                                technologies: [
                                    'Python 2.7',
                                    'Instagram API',
                                    'Mapbox API',
                                    'Faceplusplus API'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION2'],
                                technologies: [
                                    'Python 2.7',
                                    'Shell scripting',
                                    'SQLAlchemy',
                                    'Alembic',
                                    'MySQL Community Edition',
                                    'Percona XtraDB Cluster'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION3'],
                                technologies: [
                                    'Ubuntu 14.04',
                                    'Apache 2 httpd',
                                    'Amazon Web Services (AWS)',
                                    'Google Compute Engine',
                                    'SSL certificate management'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION4'],
                                technologies: [
                                    'Python 2.7',
                                    'Celery',
                                    'Django',
                                    'djcelery',
                                    'flower'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION5'],
                                technologies: [
                                    'Mediawiki',
                                    'Stikked',
                                    'Atlassian JIRA',
                                    'Slack',
                                    'Google Mail'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION6'],
                                technologies: [
                                    'Google Two-Factor Authentication',
                                    'GNU Privacy Guard'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.TAILIFY.DUTIES.DESCRIPTION7'],
                                technologies: [
                                    'Mediawiki'
                                ]
                            }
                        ]
                    },
                    {
                        organisation: 'Demonware',
                        link: 'https://www.demonware.net',
                        title: translations['EXPERIENCE.PROFESSIONAL.DW.TITLE'],
                        dateRange: translations['EXPERIENCE.PROFESSIONAL.DW.DATERANGE'],
                        duties: [
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.DW.DUTIES.DESCRIPTION1'],
                                technologies: [
                                    'Python 2.5',
                                    'Python 2.7',
                                    'Erlang/OTP',
                                    'MySQL',
                                    'Percona Server',
                                    'Atlassian JIRA',
                                    'Agile/Scrum'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.DW.DUTIES.DESCRIPTION2'],
                                technologies: [
                                    'C++',
                                    'Microsoft Visual Studio 2010'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.DW.DUTIES.DESCRIPTION3'],
                                technologies: [
                                    'Python 2.7',
                                    'Redis',
                                    'Puppet'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.DW.DUTIES.DESCRIPTION4'],
                                technologies: [
                                    'Python 2.7',
                                    'Atlassian Bamboo',
                                    'Docker',
                                    'Vagrant',
                                    'CentOS',
                                    'RPM packaging',
                                    'GNU make',
                                    'Shell scripting'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.DW.DUTIES.DESCRIPTION5'],
                                technologies: [
                                    'Mediawiki',
                                    'LaTeX'
                                ]
                            }
                        ]
                    },
                    {
                        organisation: 'Kerna Communications',
                        link: 'http://www.kerna.ie',
                        title: translations['EXPERIENCE.PROFESSIONAL.KERNA.TITLE'],
                        dateRange: translations['EXPERIENCE.PROFESSIONAL.KERNA.DATERANGE'],
                        duties: [
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION1'],
                                technologies: [
                                    'Routers and layer 2/3 switches (Cisco; Netgear; 3COM)',
                                    'Linux/BSD kernel routing/ARP tables'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION2'],
                                technologies: [
                                    'Checkpoint SecurePlatform',
                                    'Juniper SRX',
                                    'Juniper SSG/NetScreen',
                                    'Fortinet Fortigate',
                                    'CyberGuard',
                                    'Cisco PIX, Adaptive Security Appliance',
                                    'Linux iptables',
                                    'OpenBSD packet filter (pf)',
                                    'Juniper SA',
                                    'Aventail SSL VPN',
                                    'McAfee Web Gateway',
                                    'Bluecoat',
                                    'Websense',
                                    'Tumbleweed SecureTransport',
                                    'SCP/(S)FTP/FTP(E)S'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION3'],
                                technologies: [
                                    'Nagios 2/3',
                                    'Cacti',
                                    'Xymon',
                                    'nmap',
                                    'Wireshark',
                                    'snoop',
                                    'tcpdump',
                                    'Checkpoint fwmonitor',
                                    'syslog-ng',
                                    'logrotate',
                                    'RSA enVision'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION4'],
                                technologies: [
                                    'Windows Server 2003/2007',
                                    'GNU/Linux (Slackware, CentOS)',
                                    'BSD (FreeBSD, OpenBSD)',
                                    'Solaris',
                                    'Digital Unix',
                                    'bash',
                                    'zsh',
                                    'ksh'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION5'],
                                technologies: [
                                    'Apache 2 httpd',
                                    'SSL'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION6'],
                                technologies: [
                                    'sendmail',
                                    'exim',
                                    'Tumbleweed EMF',
                                    'Barracuda Spam Firewall',
                                    'McAfee Ironmail',
                                    'Cisco Ironport'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION7'],
                                technologies: [
                                    'BIND',
                                    'TinyDNS'
                                ]
                            },
                            {
                                description: translations['EXPERIENCE.PROFESSIONAL.KERNA.DUTIES.DESCRIPTION8']
                            }
                        ]
                    },
                    {
                        organisation: 'Stream International',
                        link: 'http://www.eir.ie',
                        title: translations['EXPERIENCE.PROFESSIONAL.STREAM.TITLE'],
                        dateRange: translations['EXPERIENCE.PROFESSIONAL.STREAM.DATERANGE']
                    },
                    {
                        organisation: 'Siemens Business Services',
                        link: 'http://www.siemens.com',
                        title: translations['EXPERIENCE.PROFESSIONAL.SBS.TITLE'],
                        dateRange: translations['EXPERIENCE.PROFESSIONAL.SBS.DATERANGE']
                    }
                ];
            });
        }])
        .controller('EducationController', ['$translate', function($translate) {
            var controller = this;
            $translate(['EDUCATION.FORMAL.DCU.INSTITUTION',
                    'EDUCATION.FORMAL.DCU.TITLE',
                    'EDUCATION.FORMAL.DCU.DATERANGE',
                    'EDUCATION.FORMAL.DCU.GRADEDESCRIPTION',
                    'EDUCATION.FORMAL.DCU.NOTES',
                    'EDUCATION.FORMAL.OU.INSTITUTION',
                    'EDUCATION.FORMAL.OU.TITLE',
                    'EDUCATION.FORMAL.OU.DATERANGE',
                    'EDUCATION.FORMAL.OU.GRADE',
                    'EDUCATION.FORMAL.OU.GRADEDESCRIPTION',
                    'EDUCATION.FORMAL.OU.NOTES',
                    'EDUCATION.FORMAL.LC.INSTITUTION',
                    'EDUCATION.FORMAL.LC.TITLE',
                    'EDUCATION.FORMAL.LC.DATERANGE',
                    'EDUCATION.INFORMAL.CNAG.INSTITUTION',
                    'EDUCATION.INFORMAL.CNAG.TITLE1',
                    'EDUCATION.INFORMAL.CNAG.TITLE2',
                    'EDUCATION.INFORMAL.CNAG.TITLE3',
                    'EDUCATION.INFORMAL.CNAG.DATERANGE1',
                    'EDUCATION.INFORMAL.CNAG.DATERANGE2',
                    'EDUCATION.INFORMAL.CNAG.DATERANGE3',
                    'EDUCATION.INFORMAL.CNAG.NOTES']).then(function(translations) {

                controller.formal = [
                    {
                        institution: translations['EDUCATION.FORMAL.OU.INSTITUTION'],
                        title: translations['EDUCATION.FORMAL.OU.TITLE'],
                        link: 'http://www.open.ac.uk/courses/qualifications/q64',
                        dateRange: translations['EDUCATION.FORMAL.OU.DATERANGE'],
                        grade: translations['EDUCATION.FORMAL.OU.GRADE'],
                        gradeDescription: translations['EDUCATION.FORMAL.OU.GRADEDESCRIPTION']
                    },
                    {
                        institution: translations['EDUCATION.FORMAL.DCU.INSTITUTION'],
                        title: translations['EDUCATION.FORMAL.DCU.TITLE'],
                        link: 'http://www.computing.dcu.ie/undergraduate/ca/bsc-computer-applications-dc121',
                        dateRange: translations['EDUCATION.FORMAL.DCU.DATERANGE'],
                        grade: '2.1',
                        gradeDescription: translations['EDUCATION.FORMAL.DCU.GRADEDESCRIPTION']
                    },
                    {
                        institution: translations['EDUCATION.FORMAL.LC.INSTITUTION'],
                        title: translations['EDUCATION.FORMAL.LC.TITLE'],
                        link: 'http://www.coolminecs.ie',
                        dateRange: translations['EDUCATION.FORMAL.LC.DATERANGE']
                    }
                ];
            })
        }])
})();
