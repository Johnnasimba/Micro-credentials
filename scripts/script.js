
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
                    languages: [
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
            
                },
                {
                    title: 'Advanced Express',
                    courseUrl: 'https://www.linkedin.com/learning/advanced-express',
                    provider: 'Linkedin  learning',
                    category: 'back-end',
                    date: new Date('September 05, 2020'),
                    courseHours: 2,
                    topics: [
                        'Node.js', 'Express',  'Scaling Applications'
                    ],
                    pdfUrl: 'https://drive.google.com/file/d/1X32iXbx6dFVyPsXsrRbQUJkms8Yy1yFV/preview',
            
                },
                {
                    title: 'Advanced Node.js',
                    courseUrl: 'https://www.linkedin.com/learning/advanced-node-js',
                    provider: 'Linkedin  learning',
                    category: 'back-end',
                    date: new Date('September 05, 2020'),
                    courseHours: 2,
                    topics: [
                        'Node.js'
                    ],
                    pdfUrl: 'https://drive.google.com/file/d/1ZEFzWu4DGZ6ViEiHCJdut_tY5h0xAots/preview',
            
                },
                {
                    title: 'Advanced Node.js Scaling Applications',
                    courseUrl: 'https://www.linkedin.com/learning/advanced-node-js-scaling-applications',
                    provider: 'Linkedin  learning',
                    category: 'back-end',
                    date: new Date('September 05, 2020'),
                    courseHours: 1,
                    topics: [
                        'Node.js', 'Garageband', 'Scaling Applications'
                    ],
                    pdfUrl: 'https://drive.google.com/file/d/1KVG_gmYTIJU9wElXuNBTwiQ-BfOJ7UTU/preview',
            
                },
                {
                    title: 'Angular Essential Training',
                    courseUrl: 'https://www.linkedin.com/learning/angular-essential-training-2',
                    provider: 'Linkedin  learning',
                    category: 'front-end',
                    date: new Date('August 29, 2020'),
                    courseHours: 3,
                    topics: [
                        'AngularJS', 'Single Page Applications', 'Web Applications Development'
                    ],
                    pdfUrl: 'https://drive.google.com/file/d/1mO2GCk8ZsUXxkUIKYKa0boktQs9bMp2j/preview'
                },
                {
                    title: 'AWS and React: Creating Full-Stack Apps',
                    courseUrl: 'https://www.linkedin.com/learning/aws-and-react-creating-full-stack-apps',
                    provider: 'Linkedin  learning',
                    category: 'database and hosting',
                    date: new Date('August 29, 2020'),
                    courseHours: 1,
                    topics: [
                        'Full-Stack Development', 'React', 'AWS'
                    ],
                    pdfUrl: 'https://drive.google.com/file/d/1kgpDLQwG6_YzCO9DSfHFBkf75ZPRB0qW/preview'
                },
                {
                    title: 'AWS: Deploying and Provision',
                    courseUrl: 'https://www.linkedin.com/learning/aws-deploying-and-provisioning',
                    provider: 'Linkedin  learning',
                    category: 'database and hosting',
                    date: new Date('August 29, 2020'),
                    courseHours: 5,
                    topics: [
                        'AWS', 'Cloud Computing'
                    ],
                    pdfUrl: 'https://drive.google.com/file/d/1dyfGQLkXRm8S1JO4sUsYnvuMBvnU451q/preview'
                },
                {
                    title: 'AWS for Developers: RDS MySQL Database with Lambdas',
                    courseUrl: 'https://www.linkedin.com/learning/aws-for-developers-rds-mysql-database-with-lambdas',
                    provider: 'Linkedin  learning',
                    category: 'database and hosting',
                    date: new Date('August 01, 2020'),
                    courseHours: 1,
                    topics: [
                        'AWS Lambda', 'Relational Databases', 'MySQL'
                    ],
                    pdfUrl: 'https://drive.google.com/file/d/1rRJ2fmsG_L4iQ0wYBTzDfMi90V3sdzBz/preview'
                },
                {
                    title: 'Become a Database Developer',
                    courseUrl: 'https://www.linkedin.com/learning/paths/become-a-database-developer',
                    provider: 'Linkedin  learning',
                    category: 'database and hosting',
                    date: new Date('September 04, 2020'),
                    courseHours: 10,
                    topics: [
                        'Programming Foundations: Databases', 'SQL Programming', 'MySQL Development', 'MongoDB'
                    ],
                    pdfUrl: 'https://drive.google.com/file/d/18RWBRbAyGVPNl_t5hjGZVCTC3boYFAkf/preview'
                },
           
            ];
        $scope.certificates = certificates;
        $scope.search = '';


        });