(function() {
    angular.module('punann')
        .controller('SynopsisController', ['$translate', function($translate) {
            var controller = this;
            controller.skills = [
                {
                    prefix: 'DEV',
                    sections: [
                        {
                            heading: 'SECTION1',
                            items: [
                                {
                                    names: ['Python 2', 'Python 3'],
                                    subitems: ['SQLAlchemy', 'Alembic', 'Django', 'Pyramid', 'celery', 'flower']
                                },
                                {
                                    names: ['JavaScript'],
                                    subitems: ['AngularJS', 'angular-translate', 'jQuery']
                                },
                                {
                                    names: ['HTML5', 'CSS']
                                },
                                {
                                    names: ['C']
                                },
                                {
                                    names: ['C++'],
                                    subitems: ['Qt', 'Allegro']
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
                    prefix: 'OPS',
                    sections: [
                        {
                            heading: 'SECTION1',
                            items: [
                                {
                                    names: ['GNU/Linux', 'BSD'],
                                    subitems: ['Debian', 'Ubuntu', 'CentOS', 'Red Hat', 'Fedora', 'Arch Linux', 'OpenBSD', 'FreeBSD']
                                },
                                {
                                    names: ['Windows Server']
                                }
                            ]
                        },
                        {
                            heading: 'SECTION2',
                            items: [
                                {
                                    names: ['IaaS'],
                                    subitems: ['Amazon Web Services (AWS/EC2)', 'Google Compute Engine (GCE)']
                                },
                                {
                                    names: ['HTTPD'],
                                    subitems: ['Apache', 'nginx']
                                },
                                {
                                    names: ['SQL'],
                                    subitems: ['MySQL Community Edition', 'Percona XtraDB Cluster']
                                },
                                {
                                    names: ['NoSQL'],
                                    subitems: ['Redis']
                                },
                            ]
                        },
                        {
                            heading: 'SECTION3'
                        },
                        {
                            heading: 'SECTION4',
                            items: [
                                {
                                    names: ['Checkpoint', 'Juniper', 'pf', 'iptables']
                                }
                            ]
                        }
                    ]
                },
                {
                    prefix: 'OTHER',
                    sections: [
                        {
                            heading: 'TECHWRITING'
                        }
                    ]
                }
            ];

            controller.abilities = [
                {
                    prefix: 'LANGUAGES',
                    languages: [
                        'ENGLISH',
                        'IRISH',
                        'FINNISH'
                    ]
                }
            ];
        }])
})();
