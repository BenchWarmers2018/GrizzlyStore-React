pipeline {
   agent any
   stages {
      stage('Build') {
         steps {
            echo 'BUILDING PROJECT!!'
            sh 'npm install'
         }
      }
      stage('Test') {
         steps {
            echo 'Testing in process'
         }
      }
      stage('Deploy') {
         steps {
            echo 'Deployment in process'
            sh 'npm start'
         }   
      }
   }
}

