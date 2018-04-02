node {
  stage('Build'){
    checkout scm

    def currImage = docker.build("pathfinderresourcebase:${env.BUILD_ID}")

    currImage.inside {
      sh 'node --version'
    }
  }
}
