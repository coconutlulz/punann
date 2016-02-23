(function() {
    angular.module('punann')
        .service('menuService', function() {
            this.menu = [
                {
                    id: 'SYNOPSIS',
                    link: '.synopsis'
                },
                {
                    id: 'INTERESTS',
                    link: '.interests'
                },
                {
                    id: 'EXPERIENCE',
                    link: '.experience'
                },
                {
                    id: 'EDUCATION',
                    link: '.education'
                },
                {
                    id: 'CONTACT',
                    link: '.contact'
                },
                {
                    id: 'BLOG',
                    link: '.blog'
                }
            ];

            this.skillHeadings = [
                'DEV',
                'OPS',
                'LANGUAGES'
            ];

            this.selectedSkill = null;
        })
    }
)();
