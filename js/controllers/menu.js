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
        .controller('EducationController', ['$translate', function($translate) {
            var controller = this;
            $translate(['FORMALEDUCATION.DCU.INSTITUTION',
                    'FORMALEDUCATION.DCU.TITLE',
                    'FORMALEDUCATION.DCU.DATERANGE',
                    'FORMALEDUCATION.DCU.GRADEDESCRIPTION',
                    'FORMALEDUCATION.DCU.NOTES',
                    'FORMALEDUCATION.OU.INSTITUTION',
                    'FORMALEDUCATION.OU.TITLE',
                    'FORMALEDUCATION.OU.DATERANGE',
                    'FORMALEDUCATION.OU.GRADE',
                    'FORMALEDUCATION.OU.GRADEDESCRIPTION',
                    'FORMALEDUCATION.OU.NOTES',
                    'INFORMALEDUCATION.CNAG.INSTITUTION',
                    'INFORMALEDUCATION.CNAG.TITLE1',
                    'INFORMALEDUCATION.CNAG.TITLE2',
                    'INFORMALEDUCATION.CNAG.TITLE3',
                    'INFORMALEDUCATION.CNAG.DATERANGE1',
                    'INFORMALEDUCATION.CNAG.DATERANGE2',
                    'INFORMALEDUCATION.CNAG.DATERANGE3',
                    'INFORMALEDUCATION.CNAG.NOTES']).then(function(translations) {

                console.log(translations);
                controller.formal = [
                    {
                        institution: translations['FORMALEDUCATION.DCU.INSTITUTION'],
                        title: translations['FORMALEDUCATION.DCU.TITLE'],
                        link: 'http://www.computing.dcu.ie/undergraduate/ca/bsc-computer-applications-dc121',
                        dateRange: translations['FORMALEDUCATION.DCU.DATERANGE'],
                        grade: '2.1',
                        gradeDescription: translations['FORMALEDUCATION.DCU.GRADEDESCRIPTION']
                    },
                    {
                        institution: translations['FORMALEDUCATION.OU.INSTITUTION'],
                        title: translations['FORMALEDUCATION.OU.TITLE'],
                        link: 'http://www.open.ac.uk/courses/qualifications/q64',
                        dateRange: translations['FORMALEDUCATION.OU.DATERANGE'],
                        grade: translations['FORMALEDUCATION.OU.GRADE'],
                        gradeDescription: translations['FORMALEDUCATION.OU.GRADEDESCRIPTION']
                    }
                ];
            })
        }])
})();
