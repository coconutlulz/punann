(function() {
    angular.module('punann')
        .controller('InterestsController', ['$translate', function($translate) {
            var root = 'INTERESTS';
            this.translationIDs = [
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
        }])
})();
