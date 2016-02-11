(function() {
    angular.module('punann')
        .controller('SynopsisController', ['$translate', 'menuService', function($translate, menuService) {
            this.skills = [
                {
                    prefix: menuService.skillHeadings[0],
                    sections: [
                        {
                            heading: 'SECTION1',
                            items: [
                                {
                                    names: ['Python 2', 'Python 3'],
                                    subitems: ['SQLAlchemy', 'Alembic', 'Django', 'Pyramid', 'celery', 'flower']
                                },
                                {
                                    names: ['JavaScript', 'HTML5', 'CSS'],
                                    subitems: ['AngularJS', 'angular-translate', 'jQuery']
                                },
                                {
                                    names: ['C', 'C++'],
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
                    prefix: menuService.skillHeadings[1],
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
                    prefix: menuService.skillHeadings[2],
                    sections: [
                        {
                            heading: 'TECHWRITING'
                        }
                    ]
                },
                {
                    prefix: menuService.skillHeadings[3],
                    sections: [
                        {
                            heading: 'ENGLISH.HEADING',
                            items: [
                                {
                                    names: ['SYNOPSIS.SKILLS.' + menuService.skillHeadings[3] + '.ENGLISH.LEVEL']
                                }
                            ]
                        },
                        {
                            heading: 'IRISH.HEADING',
                            items: [
                                {
                                    names: ['SYNOPSIS.SKILLS.' + menuService.skillHeadings[3] + '.IRISH.LEVEL']
                                }
                            ]
                        },
                        {
                            heading: 'FINNISH.HEADING',
                            items: [
                                {
                                    names: ['SYNOPSIS.SKILLS.' + menuService.skillHeadings[3] + '.FINNISH.LEVEL']
                                }
                            ]
                        }
                    ]
                }
            ];

            this.isSelected = function(skill) {
                console.log(skill);
                console.log(menuService.selectedSkill);
                return skill == menuService.selectedSkill;
            };
            this.toggleShow = function(skill) {
                menuService.selectedSkill = skill;
                console.log(skill);
                console.log(menuService.selectedSkill);
            };
        }])
})();
