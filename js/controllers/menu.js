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
                    'SYNOPSIS.P4']);
        }])
        .controller('ExperienceController', ['$translate', function($translate) {
            var controller = this;
            $translate(['PROEXPERIENCE.AL.TITLE',
                    'PROEXPERIENCE.AL.DATERANGE',
                    'PROEXPERIENCE.AL.DUTIES.DESCRIPTION1',
                    'PROEXPERIENCE.AL.DUTIES.TECHNOLOGIES1',
                    'PROEXPERIENCE.TAILIFY.TITLE',
                    'PROEXPERIENCE.TAILIFY.DATERANGE',
                    'PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION1',
                    'PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION2',
                    'PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION3',
                    'PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION4',
                    'PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION5',
                    'PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION6',
                    'PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION7',
                    'PROEXPERIENCE.DW.TITLE',
                    'PROEXPERIENCE.DW.DATERANGE',
                    'PROEXPERIENCE.DW.DUTIES.DESCRIPTION1',
                    'PROEXPERIENCE.DW.DUTIES.DESCRIPTION2',
                    'PROEXPERIENCE.DW.DUTIES.DESCRIPTION3',
                    'PROEXPERIENCE.DW.DUTIES.DESCRIPTION4',
                    'PROEXPERIENCE.DW.DUTIES.DESCRIPTION5',
                    'PROEXPERIENCE.KERNA.TITLE',
                    'PROEXPERIENCE.KERNA.DATERANGE',
                    'PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION1',
                    'PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION2',
                    'PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION3',
                    'PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION4',
                    'PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION5',
                    'PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION6',
                    'PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION7',
                    'PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION8',
                    'PROEXPERIENCE.STREAM.TITLE',
                    'PROEXPERIENCE.STREAM.DATERANGE',
                    'PROEXPERIENCE.SBS.TITLE',
                    'PROEXPERIENCE.SBS.DATERANGE',
                    'VOLEXPERIENCE.FSTRANSLATOR.ORGANISATION',
                    'VOLEXPERIENCE.FSTRANSLATOR.TITLE',
                    'VOLEXPERIENCE.FSTRANSLATOR.DATERANGE',
                    'VOLEXPERIENCE.FSTRANSLATOR.DUTIES.DESCRIPTION1',
                    'VOLEXPERIENCE.FSTRANSLATOR.DUTIES.DESCRIPTION2',
                    'VOLEXPERIENCE.FS.ORGANISATION',
                    'VOLEXPERIENCE.FS.TITLE',
                    'VOLEXPERIENCE.FS.DATERANGE',
                    'VOLEXPERIENCE.FS.DUTIES.DESCRIPTION1'
            ]).then(function(translations) {
                controller.voluntary = [
                    {
                        organisation: translations['VOLEXPERIENCE.FSTRANSLATOR.ORGANISATION'],
                        title: translations['VOLEXPERIENCE.FSTRANSLATOR.TITLE'],
                        dateRange: translations['VOLEXPERIENCE.FSTRANSLATOR.DATERANGE'],
                        duties: [
                            {
                                description: translations['VOLEXPERIENCE.FSTRANSLATOR.DUTIES.DESCRIPTION1'],
                                technologies: [
                                    'Transifex'
                                ]
                            },
                            {
                                description: translations['VOLEXPERIENCE.FSTRANSLATOR.DUTIES.DESCRIPTION2'],
                                technologies: [
                                    'Transifex'
                                ]
                            }
                        ]
                    },
                    {
                        organisation: translations['VOLEXPERIENCE.FS.ORGANISATION'],
                        title: translations['VOLEXPERIENCE.FS.TITLE'],
                        dateRange: translations['VOLEXPERIENCE.FS.DATERANGE'],
                        duties: [
                            {
                                description: translations['VOLEXPERIENCE.FS.DUTIES.DESCRIPTION1'],
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
                        title: translations['PROEXPERIENCE.AL.TITLE'],
                        dateRange: translations['PROEXPERIENCE.AL.DATERANGE'],
                        duties: [
                            {
                                description: translations['PROEXPERIENCE.AL.DUTIES.DESCRIPTION1'],
                            }
                        ]
                    },
                    {
                        organisation: 'Tailify',
                        link: 'http://www.tailify.com',
                        title: translations['PROEXPERIENCE.TAILIFY.TITLE'],
                        dateRange: translations['PROEXPERIENCE.TAILIFY.DATERANGE'],
                        duties: [
                            {
                                description: translations['PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION1'],
                                technologies: [
                                    'Python 2.7',
                                    'Instagram API',
                                    'Mapbox API',
                                    'Faceplusplus API'
                                ]
                            },
                            {
                                description: translations['PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION2'],
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
                                description: translations['PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION3'],
                                technologies: [
                                    'Ubuntu 14.04',
                                    'Apache 2 httpd',
                                    'Amazon Web Services (AWS)',
                                    'Google Compute Engine',
                                    'SSL certificate management'
                                ]
                            },
                            {
                                description: translations['PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION4'],
                                technologies: [
                                    'Python 2.7',
                                    'Celery',
                                    'Django',
                                    'djcelery',
                                    'flower'
                                ]
                            },
                            {
                                description: translations['PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION5'],
                                technologies: [
                                    'Mediawiki',
                                    'Stikked',
                                    'Atlassian JIRA',
                                    'Slack',
                                    'Google Mail'
                                ]
                            },
                            {
                                description: translations['PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION6'],
                                technologies: [
                                    'Google Two-Factor Authentication',
                                    'GNU Privacy Guard'
                                ]
                            },
                            {
                                description: translations['PROEXPERIENCE.TAILIFY.DUTIES.DESCRIPTION7'],
                                technologies: [
                                    'Mediawiki'
                                ]
                            }
                        ]
                    },
                    {
                        organisation: 'Demonware',
                        link: 'https://www.demonware.net',
                        title: translations['PROEXPERIENCE.DW.TITLE'],
                        dateRange: translations['PROEXPERIENCE.DW.DATERANGE'],
                        duties: [
                            {
                                description: translations['PROEXPERIENCE.DW.DUTIES.DESCRIPTION1'],
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
                                description: translations['PROEXPERIENCE.DW.DUTIES.DESCRIPTION2'],
                                technologies: [
                                    'C++',
                                    'Microsoft Visual Studio 2010'
                                ]
                            },
                            {
                                description: translations['PROEXPERIENCE.DW.DUTIES.DESCRIPTION3'],
                                technologies: [
                                    'Python 2.7',
                                    'Redis',
                                    'Puppet'
                                ]
                            },
                            {
                                description: translations['PROEXPERIENCE.DW.DUTIES.DESCRIPTION4'],
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
                                description: translations['PROEXPERIENCE.DW.DUTIES.DESCRIPTION5'],
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
                        title: translations['PROEXPERIENCE.KERNA.TITLE'],
                        dateRange: translations['PROEXPERIENCE.KERNA.DATERANGE'],
                        duties: [
                            {
                                description: translations['PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION1'],
                                technologies: [
                                    'Routers and layer 2/3 switches (Cisco; Netgear; 3COM)',
                                    'Linux/BSD kernel routing/ARP tables'
                                ]
                            },
                            {
                                description: translations['PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION2'],
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
                                description: translations['PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION3'],
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
                                description: translations['PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION4'],
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
                                description: translations['PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION5'],
                                technologies: [
                                    'Apache 2 httpd',
                                    'SSL'
                                ]
                            },
                            {
                                description: translations['PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION6'],
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
                                description: translations['PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION7'],
                                technologies: [
                                    'BIND',
                                    'TinyDNS'
                                ]
                            },
                            {
                                description: translations['PROEXPERIENCE.KERNA.DUTIES.DESCRIPTION8']
                            }
                        ]
                    },
                    {
                        organisation: 'Stream International',
                        link: 'http://www.eir.ie',
                        title: translations['PROEXPERIENCE.STREAM.TITLE'],
                        dateRange: translations['PROEXPERIENCE.STREAM.DATERANGE']
                    },
                    {
                        organisation: 'Siemens Business Services',
                        link: 'http://www.siemens.com',
                        title: translations['PROEXPERIENCE.SBS.TITLE'],
                        dateRange: translations['PROEXPERIENCE.SBS.DATERANGE']
                    }
                ];
            });
        }])
        .controller('EducationController', ['$translate', function($translate) {
            var controller = this;
            $translate(['FORMALEDUCATION.DCU.INSTITUTION',
                    'FORMALEDUCATION.DCU.TITLE',
                    'FORMALEDUCATION.DCU.DATERANGE',
                    'FORMALEDUCATION.DCU.GRADEDESCRIPTION',
                    'FORMALEDUCATION.DCU.NOTES',
                    'FORMALEDUCATION.OU.INSTITUTION',
                    'FORMALEDUCATION.OU.TITLE',
                    'FORMALEDUCATION.OU.DATERANGE',
                    'FORMALEDUCATION.OU.GRADE',
                    'FORMALEDUCATION.OU.GRADEDESCRIPTION',
                    'FORMALEDUCATION.OU.NOTES',
                    'FORMALEDUCATION.LC.INSTITUTION',
                    'FORMALEDUCATION.LC.TITLE',
                    'FORMALEDUCATION.LC.DATERANGE',
                    'INFORMALEDUCATION.CNAG.INSTITUTION',
                    'INFORMALEDUCATION.CNAG.TITLE1',
                    'INFORMALEDUCATION.CNAG.TITLE2',
                    'INFORMALEDUCATION.CNAG.TITLE3',
                    'INFORMALEDUCATION.CNAG.DATERANGE1',
                    'INFORMALEDUCATION.CNAG.DATERANGE2',
                    'INFORMALEDUCATION.CNAG.DATERANGE3',
                    'INFORMALEDUCATION.CNAG.NOTES']).then(function(translations) {

                controller.formal = [
                    {
                        institution: translations['FORMALEDUCATION.OU.INSTITUTION'],
                        title: translations['FORMALEDUCATION.OU.TITLE'],
                        link: 'http://www.open.ac.uk/courses/qualifications/q64',
                        dateRange: translations['FORMALEDUCATION.OU.DATERANGE'],
                        grade: translations['FORMALEDUCATION.OU.GRADE'],
                        gradeDescription: translations['FORMALEDUCATION.OU.GRADEDESCRIPTION']
                    },
                    {
                        institution: translations['FORMALEDUCATION.DCU.INSTITUTION'],
                        title: translations['FORMALEDUCATION.DCU.TITLE'],
                        link: 'http://www.computing.dcu.ie/undergraduate/ca/bsc-computer-applications-dc121',
                        dateRange: translations['FORMALEDUCATION.DCU.DATERANGE'],
                        grade: '2.1',
                        gradeDescription: translations['FORMALEDUCATION.DCU.GRADEDESCRIPTION']
                    },
                    {
                        institution: translations['FORMALEDUCATION.LC.INSTITUTION'],
                        title: translations['FORMALEDUCATION.LC.TITLE'],
                        link: 'http://www.coolminecs.ie',
                        dateRange: translations['FORMALEDUCATION.LC.DATERANGE']
                    }
                ];
            })
        }])
})();
