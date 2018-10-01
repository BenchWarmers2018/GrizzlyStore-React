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
            sh 'pwd'
            sh 'sudo npm install forever -g'
            sh 'forever start -c "npm start" src/App.js'
         }   
      }
   }
}

