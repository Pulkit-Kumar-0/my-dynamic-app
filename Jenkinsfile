pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Pulkit-Kumar-0/my-static-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    def installStatus = sh(script: 'npm install', returnStatus: true)
                    if (installStatus != 0) {
                        error "npm install failed"
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    def buildStatus = sh(script: 'npm run build', returnStatus: true)
                    if (buildStatus != 0) {
                        error "Build failed"
                    }
                    // def exportStatus = sh(script: 'npm run export', returnStatus: true)
                    // if (exportStatus != 0) {
                    //     error "Export failed"
                    }
                }
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'out/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build and deployment completed successfully!'
        }
        failure {
            echo 'Build or deployment failed. Check the logs for details.'
        }
        always {
            cleanWs()
        }
    }
}
