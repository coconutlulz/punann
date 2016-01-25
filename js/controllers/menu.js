(function() {
    angular.module('punann')
        .service('nameService', function() {
            this.firstName = 'David';
            this.fade = false;

            this.nameIndex = 0;
            this.surnames = [
                'Lynam',
                'Ó Laıġeanáın'
            ];

            this.getFirstName = function() {
                return this.firstName;
            };

            this.getCurrentSurname = function() {
                return this.surnames[this.nameIndex];
            };

            this.getNextSurname = function() {
                return this.surnames[(this.nameIndex + 1) % this.surnames.length];
            };

            this.getFade = function() {
                return this.fade;
            };

            this.setCurrentSurname = function(surname) {
                this.currentSurname = surname;
            };

            this.setNextSurname = function(surname) {
                this.nextSurname = surname;
            };

            this.shiftNameIndex = function() {
                this.nameIndex = (this.nameIndex + 1) % this.surnames.length;
            };

            this.toggleFade = function() {
                this.fade = !this.fade;
            };
        })
        .service('menuService', function() {
            this.languages = ['english', 'irish'];
            this.currentLanguage = 0;

            this.menu = {};
            this.menu.english = [
                'Synopsis',
                'Interests',
                'Experience',
                'Education'];

            this.menu.irish = [
                 'Aċoimre',
                 'Caiṫeaṁ Aimsire',
                 'Taiṫí',
                 'Oideaċas'];

            this.menu.links = [
                '.synopsis',
                '.interests',
                '.experience',
                '.education'];
            
            var service = this;

            this.getCurrentLanguage = function() {
                return service.languages[service.currentLanguage];
            };

            this.getMenuLabelsForCurrentLanguage = function() {
                return service.menu[service.getCurrentLanguage()];
            };

            this.getMenuLinks = function() {
                return service.menu.links;
            };

            this.setCurrentLanguage = function(index) {
                service.currentLanguage = index;
            };

        })
        .controller('NameController', ['$interval', 'nameService', function($interval, nameService) {
            this.firstName = nameService.getFirstName();

            this.getCurrentSurname = function() {
                return nameService.getCurrentSurname();
            };

            this.getFade = function() {
                return nameService.getFade();
            };

            function fadeNextName() {
                nameService.toggleFade();
                nameService.shiftNameIndex();
            }

            $interval(fadeNextName, 5000);
        }])
        .controller('MenuController', ['menuService', function(menuService) {
            this.currentMenu = [];
            var controller = this;

            var rebuildMenu = function() {
                var newMenu = [];
                var labels = menuService.getMenuLabelsForCurrentLanguage();
                var links = menuService.getMenuLinks();

                for(var i = 0; i < labels.length; i++) {
                    var newItem = {};
                    newItem.label = labels[i];
                    newItem.link = links[i];
                    newMenu[i] = newItem;
                }

                controller.currentMenu = newMenu;
            }

            rebuildMenu();

            var changeLanguage = function(index) {
                if(menuService.getCurrentLanguage != index) {
                    menuService.setCurrentLanguage(index);
                    controller.rebuildMenu();
                }
            }
        }])
})();
