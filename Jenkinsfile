node {
  stage('Build'){
    checkout scm

    def currImage = docker.build("obyoxar/pathfinderresourcebase:${env.BUILD_ID}")

    currImage.inside {
      ping = sh(script: 'node --version', returnStatus: true)
      echo "Ping went with ${ping}"
      if(ping != 0){
        error("Build failed! NodeJs wasn't able to install!")
      }
    }
  }
  stage('Push'){
    echo "Im on ${env.BRANCH_NAME}"
    if (env.BRANCH_NAME == 'master') {
      echo 'On master branch... pushings'
      currImage.push('latest')
    }
  }
}
