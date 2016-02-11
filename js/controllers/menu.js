(function() {
    angular.module('punann')
       .controller('MenuController', ['$translate', 'menuService', function($translate, menuService) {
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
        }])
})();
