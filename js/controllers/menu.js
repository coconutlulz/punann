(function() {
    angular.module('punann')
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
})();
