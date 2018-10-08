pipeline {
   agent any
   stages {
      stage('Build') {
         steps {
            echo 'Build Stage'
            sh 'npm install'
            sh 'rm -rf build/*'
            sh 'npm run build'
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

