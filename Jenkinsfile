pipeline {
  agent none
  stages {
    stage('Preprocess') {
      steps {
        echo 'Hello'
      }
    }
    stage('Build') {
      agent {
        dockerfile {
          filename 'Dockerfile'
        }
        
      }
      steps {
        echo 'Agent dockerfile?'
      }
    }
  }
}