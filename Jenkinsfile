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
            sh 'bash ./deploy.sh'
         }   
      }
   }
}

