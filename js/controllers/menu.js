(function() {
    angular.module('punann')
        .controller('NameController', ['$interval', function($interval) {
            var index = 0;
            var surnames = [
                'Lynam',
                'Ó Laıġeanáın'
            ];

            this.firstName = 'David';
            this.fade = false;
            this.currentSurname = surnames[index];
            this.nextSurname = surnames[(index + 1) % surnames.length];
            var controller = this;

            function fadeNextName() {
                controller.fade = !controller.fade;

                index = (index + 1) % surnames.length;

                controller.currentSurname = surnames[index];
                controller.nextSurname = surnames[(index + 1) % surnames.length];
            }

            $interval(fadeNextName, 5000);
        }])
        .controller('MenuController', function() {
            this.languages = ['english', 'irish'];
            this.currentLanguage = 0;

            this.menuItems = {}
            this.menuItems.english = [
                'Synopsis',
                'Interests',
                'Experience',
                'Education'];
            this.menuItems.irish = [
                 'Aċoimre',
                 'Caiṫeaṁ Aimsire',
                 'Taiṫí',
                 'Oideaċas'];
            
        })
})();
