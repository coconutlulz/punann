(function() {
    angular.module('punann')
        .controller('SynopsisController', ['$translate', 'menuService', function($translate, menuService) {
            this.skills = [
                {
                    colour:
                    {
                        fg:
                        {
                            red: 255,
                            green: 255,
                            blue: 255,
                            alpha: 100
                        },
                        bg:
                        {
                            red: 12,
                            green: 33,
                            blue: 59,
                            alpha: 100
                        }
                    },
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
                    colour:
                    {
                        fg:
                        {
                            red: 12,
                            green: 33,
                            blue: 59,
                            alpha: 100
                        },
                        bg:
                        {
                            red: 200,
                            green: 200,
                            blue: 200,
                            alpha: 100
                        }
                    },
                    sections: [
                        {
                            heading: 'SECTION1',
                            items: [
                                {
                                    names: ['GNU/Linux'],
                                    subitems: ['Debian', 'Ubuntu', 'CentOS', 'Red Hat', 'Fedora', 'Arch Linux']
                                },
                                {
                                    names: ['Unix'],
                                    subitems: ['FreeBSD', 'OpenBSD', 'Solaris']
                                },
                                {
                                    names: ['Windows Server'],
                                    subitems: ['2003', '2008']
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
                                    names: ['WWW'],
                                    subitems: ['Apache', 'nginx', 'lighttpd', 'WordPress']
                                },
                                {
                                    names: ['SQL'],
                                    subitems: ['MySQL Community Edition', 'Percona XtraDB Cluster', 'ORM']
                                },
                                {
                                    names: ['NoSQL'],
                                    subitems: ['Redis']
                                },
                                {
                                    names: ['SYNOPSIS.SKILLS.OPS.SECTION2OTHER'],
                                    subitems: ['RabbitMQ']
                                }
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
                    colour:
                    {
                        fg:
                        {
                            red: 0,
                            green: 0,
                            blue: 0,
                            alpha: 100
                        },
                        bg:
                        {
                            red: 255,
                            green: 255,
                            blue: 255,
                            alpha: 100
                        }
                    },
                    sections: [
                        {
                            heading: 'ENGLISH.HEADING',
                            items: [
                                {
                                    names: ['SYNOPSIS.SKILLS.' + menuService.skillHeadings[2] + '.ENGLISH.LEVEL']
                                }
                            ]
                        },
                        {
                            heading: 'IRISH.HEADING',
                            items: [
                                {
                                    names: ['SYNOPSIS.SKILLS.' + menuService.skillHeadings[2] + '.IRISH.LEVEL']
                                }
                            ]
                        },
                        {
                            heading: 'FINNISH.HEADING',
                            items: [
                                {
                                    names: ['SYNOPSIS.SKILLS.' + menuService.skillHeadings[2] + '.FINNISH.LEVEL']
                                }
                            ]
                        }
                    ]
                }
            ];

            var controller = this;
            this.isSelected = function(skill) {
                return skill == menuService.selectedSkill;
            };

            this.toggleShow = function(skill) {
                if(controller.isSelected(skill)) {
                    menuService.selectedSkill = null;
                }
                else {
                    menuService.selectedSkill = skill;
                }
            };

            this.extractBGColour = function(skill) {
                var result = 'rgba(' + 
                        skill.colour.bg.red + ',' +
                        skill.colour.bg.green + ',' +
                        skill.colour.bg.blue + ',' +
                        skill.colour.bg.alpha + ')';
                return result;
            };

            this.extractFGColour = function(skill) {
                var result = 'rgba(' + 
                        skill.colour.fg.red + ',' +
                        skill.colour.fg.green + ',' +
                        skill.colour.fg.blue + ',' +
                        skill.colour.fg.alpha + ')';
                return result;
            };
        }])
})();
