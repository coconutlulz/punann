(function() {
    angular.module('punann')
        .controller('NameController', ['$interval', function($interval) {
            var index = 0;
            var surnames = [
                'Lynam',
                'Ó Laıġeanáın',
            ];

            this.firstName = 'David';
            this.fade = false;
            this.currentSurname = surnames[index];
            this.nextSurname = surnames[(index + 1) % surnames.length];
            var controller = this;

            function fadeNextName() {
                controller.fade = true;

                index = (index + 1) % surnames.length;

                controller.currentSurname = surnames[index];
                controller.nextSurname = surnames[(index + 1) % surnames.length];

                controller.fade = false;
            }

            $interval(fadeNextName, 3000);
        }])
        .controller('MenuController', function() {
            this.menuItems = [
                "Synopsis",
                "Interests",
                "Experience",
                "Education"
            ];
        })
})();
