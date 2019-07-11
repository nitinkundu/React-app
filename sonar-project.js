const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://3.14.251.87:9000',
       options : {
       'sonar.projectKey' : 'React-new'
       'sonar.projectName' : 'React-new'
       'sonar.projectVersion' : '0.0.1'
       'sonar.sources': '.',
       'sonar.inclusions' : 'src/**' // Entry point of your code
       }
     }, () => {});
