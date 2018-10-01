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
            echo 'Testing Stage'
         }
      }
      stage('Deploy') {
         steps {
            echo 'Deployment in process'
            sh 'forever stopall'
            sh 'forever start -c "npm start" src/App.js'
         }   
      }
   }
}

