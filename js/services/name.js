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
    }
)();
