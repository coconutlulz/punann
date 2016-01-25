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
            this.menu = [
                {
                    label: 'Synopsis',
                    link: '.synopsis',
                },
                {
                    label: 'Interests',
                    link: '.interests',
                },
                {
                    label: 'Experience',
                    link: '.experience',
                },
                {
                    label: 'Education',
                    link: '.education',
                },
            ];

            var service = this;
            this.getMenu = function() {
                return service.menu;
            };
        })
        .service('educationService', function() {
            var service = this;
            this.getFormalEducation = function() {
                return service.formalEducation;
            };

            this.getInformalEducation = function() {
                return service.informalEducation;
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
            this.currentMenu = menuService.getMenu();
        }])
        .controller('EducationController', ['educationService', function(educationService) {
            this.formal = educationService.getFormalEducation();
            this.informal = educationService.getInformalEducation();

            console.log(this.formal);
        }])
})();
