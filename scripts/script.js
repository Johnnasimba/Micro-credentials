
var app = angular
    .module('appModule', [])
    .config(function ($sceProvider) {
        $sceProvider.enabled(false);
    })
    .controller('AppController', function ($scope) {
        
            var certificates = [
                {
                    title: 'Create a back-end app with Javascript skill path',
                    courseUrl: 'https://www.codecademy.com/learn/paths/create-a-back-end-app-with-javascript',
                    provider: 'codecademy',
                    category: 'back-end',
                    date: new Date('August 30, 2020'),
                    courseHours: 32,
                    topics: [
                        'JavaScript', 'Node.js', 'Express', 'APIs', 'HTTP', 'SQL', 'Node-SQLite'
                    ],
                    pdfUrl: 'https://drive.google.com/file/d/14lpDRD6bYh1COY3_thB7RqR6auLKdT0p/preview'
                },
                {
                    title: 'Advance your node.js skills',
                    courseUrl: 'https://www.linkedin.com/learning/paths/advance-your-node-js-skills',
                    provider: 'Linkedin  learning',
                    category: 'back-end',
                    date: new Date('June 09, 2020'),
                    courseHours: 17,
                    topics: [
                        'Node.js', 'Security', ' Design Patterns', 'Micro services',
                        'Testing and Code Quality', 'Debugging and Performance',
                        'Scaling Applications'
                    ],
                    pdfUrl: 'https://drive.google.com/file/d/1hc2g4-vTTne4LM6S0uE-MJ71jcSNan6P/preview',
        
                }
           
            ];
            $scope.certificates = certificates;


        });