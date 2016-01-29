(function() {
    angular.module('punann')
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
})();
