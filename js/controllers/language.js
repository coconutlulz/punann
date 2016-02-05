(function() {
    angular.module('punann')
       .controller('LanguageController', ['$translate', function($translate) {
            this.languages = [
                'en',
                'ga'
            ];

            var controller = this;
            $translate.onReady(function() {
                controller.currentLanguageIndex = controller.languages.indexOf($translate.use());

                controller.getCurrentLanguage = function() {
                    return controller.languages[controller.currentLanguageIndex];
                };

                controller.getNextLanguage = function() {
                    var nextLanguageIndex = (controller.currentLanguageIndex + 1) % controller.languages.length;
                    return controller.languages[nextLanguageIndex];
                };

                controller.changeLanguage = function(key) {
                    $translate.use(key);
                    controller.currentLanguageIndex = controller.languages.indexOf(key);
                };

            })
        }])
})();
