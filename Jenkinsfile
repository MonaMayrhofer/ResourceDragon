node {
  stage('Build'){
    checkout cvs

    def currImage = docker.build("pathfinderresourcebase:${env.BUILD_ID}")

    currImage.inside {
      sh 'node --version'
      ping = sh(script: 'curl -f http://127.0.0.1:3000', returnStatus: true)
      echo "Ping went with ${ping}"
      if(ping != 0){
        error("Build failed! NodeJs wasn't able to start!")
      }
    }

    if (env.BRANCH_NAME == 'master') {
      echo 'On master branch... pushing'
      currImage.push('latest')
    }
  }
}
