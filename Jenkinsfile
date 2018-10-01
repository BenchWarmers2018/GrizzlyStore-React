pipeline {
   agent any
   stages {
      stage('Build') {
         steps {
            echo 'Build Stage'
            sh 'npm install'
         }
      }
      stage('Test') {
         steps {
            echo 'Testing Stage'
         }
      }
      stage('Deploy') {
         steps {
            echo 'Deployment Stage'
            sh 'forever stopall'
            sh 'export JENKINS_NODE_COOKIE=dontKillMe'
            sh 'forever start -c "npm start" src/App.js'
         }   
      }
   }
}

