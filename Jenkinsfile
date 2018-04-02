node {
  stage('Build'){
    checkout scm


    def currImage = docker.build("pathfinderresourcebase:${env.BUILD_ID}")

    currImage.inside {
      ping = sh(script: 'node --version', returnStatus: true)
      echo "Ping went with ${ping}"
      if(ping != 0){
        error("Build failed! NodeJs wasn't able to install!")
      }
    }

    if (env.BRANCH_NAME == 'master') {
      echo 'On master branch... pushing'
      currImage.push('latest')
    }
  }
}
