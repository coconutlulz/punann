(function() {
    angular.module('punann')
        .controller('ExperienceController', [function($translate) {
            this.voluntary = [
                {
                    prefix: 'FSTRANSLATOR',
                    link: 'https://www.transifex.com/user/profile/coconutlulz/',
                    duties: [
                        {
                            id: 'DESCRIPTION1',
                            technologies: [
                                'Transifex'
                            ]
                        },
                        {
                            id: 'DESCRIPTION2',
                            technologies: [
                                'Transifex'
                            ]
                        }
                    ]
                },
                {
                    prefix: 'FS',
                    link: 'https://github.com/coconutlulz',
                    duties: [
                        {
                            id: 'DESCRIPTION1',
                            technologies: [
                                'C++',
                                'Qt'
                            ]
                        }
                    ]
                },
                {
                    prefix: 'RBADMIN',
                    link: 'https://redbrick.dcu.ie',
                    duties: [
                        {
                            id: 'DESCRIPTION1',
                            technologies: [
                                'Ubuntu 8.04',
                                'Solaris 10',
                                'OpenBSD',
                                'Hybrid IRCD',
                                'Apache',
                                'NNTP'
                            ]
                        }
                    ]
                }
            ]

            this.professional = [
                {
                    prefix: 'AL',
                    organisation: 'The Analyst Lounge',
                    link: 'http://www.theanalystlounge.com',
                    duties: [
                        {
                            description: 'DESCRIPTION1'
                        }
                    ]
                },
                {
                    prefix: 'TAILIFY',
                    organisation: 'Tailify',
                    link: 'http://www.tailify.com',
                    duties: [
                        {
                            description: 'DESCRIPTION1',
                            technologies: [
                                'Python 2.7',
                                'Instagram API',
                                'Mapbox API',
                                'Faceplusplus API'
                            ]
                        },
                        {
                            description: 'DESCRIPTION2',
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
                            description: 'DESCRIPTION3',
                            technologies: [
                                'Ubuntu 14.04',
                                'Apache 2 httpd',
                                'Amazon Web Services (AWS)',
                                'Google Compute Engine',
                                'SSL certificate management'
                            ]
                        },
                        {
                            description: 'DESCRIPTION4',
                            technologies: [
                                'Python 2.7',
                                'Celery',
                                'Django',
                                'djcelery',
                                'flower',
                                'RabbitMQ'
                            ]
                        },
                        {
                            description: 'DESCRIPTION5',
                            technologies: [
                                'Mediawiki',
                                'Stikked',
                                'Atlassian JIRA',
                                'Slack',
                                'Google Mail'
                            ]
                        },
                        {
                            description: 'DESCRIPTION6',
                            technologies: [
                                'Google Two-Factor Authentication',
                                'GNU Privacy Guard'
                            ]
                        },
                        {
                            description: 'DESCRIPTION7',
                            technologies: [
                                'Mediawiki'
                            ]
                        }
                    ]
                },
                {
                    prefix: 'DW',
                    organisation: 'Demonware',
                    link: 'https://www.demonware.net',
                    duties: [
                        {
                            description: 'DESCRIPTION1',
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
                            description: 'DESCRIPTION2',
                            technologies: [
                                'C++',
                                'Microsoft Visual Studio 2010'
                            ]
                        },
                        {
                            description: 'DESCRIPTION3',
                            technologies: [
                                'Python 2.7',
                                'Redis',
                                'Puppet'
                            ]
                        },
                        {
                            description: 'DESCRIPTION4',
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
                            description: 'DESCRIPTION5',
                            technologies: [
                                'Mediawiki',
                                'LaTeX'
                            ]
                        }
                    ]
                },
                {
                    prefix: 'KERNA',
                    organisation: 'Kerna Communications',
                    link: 'http://www.kerna.ie',
                    duties: [
                        {
                            description: 'DESCRIPTION1',
                            technologies: [
                                'Routers and layer 2/3 switches (Cisco; Netgear; 3COM)',
                                'Linux/BSD kernel routing/ARP tables'
                            ]
                        },
                        {
                            description: 'DESCRIPTION2',
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
                            description: 'DESCRIPTION3',
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
                            description: 'DESCRIPTION4',
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
                            description: 'DESCRIPTION5',
                            technologies: [
                                'Apache 2 httpd',
                                'SSL'
                            ]
                        },
                        {
                            description: 'DESCRIPTION6',
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
                            description: 'DESCRIPTION7',
                            technologies: [
                                'BIND',
                                'TinyDNS'
                            ]
                        },
                        {
                            description: 'DESCRIPTION8'
                        }
                    ]
                },
                {
                    prefix: 'STREAM',
                    organisation: 'Stream International',
                    link: 'http://www.eir.ie',
                },
                {
                    prefix: 'SBS',
                    organisation: 'Siemens Business Services',
                    link: 'http://www.siemens.com',
                }
            ];

            this.selected = null;

            var controller = this;
            this.toggleShow = function(position) {
                if (controller.selected == position) {
                    controller.selected = null;
                }
                else {
                    controller.selected = position;
                }
            };
        }])
})();
