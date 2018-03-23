pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh '''

pwd; id'''
        sh 'npm install'
      }
    }
  }
}