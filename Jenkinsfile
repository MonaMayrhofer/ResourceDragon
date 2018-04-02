node {
  stage('Build'){
    checkout git

    def currImage = docker.build("pathfinderresourcebase:${env.BUILD_ID}")

    currImage.inside {
      sh 'node --version'
      sh 'curl -f http://127.0.0.1:3000 || echo "Failed to retrieve data"'
    }

    if (env.BRANCH_NAME == 'master') {
      echo 'On master branch... pushing'
      currImage.push('latest')
    }
  }
}
